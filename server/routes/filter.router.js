const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/typeId=:typeID/featureId=:featureID', (req, res) => {
  const typeId = req.params.typeID;
  const featureId = req.params.featureID;
  console.log('vendor type=', typeId);
  console.log('special feature', featureId);

  if (featureId === "-1") {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                        JOIN "users" ON "vendors"."vendorUserId" = "users".id
                        WHERE "vendorUserId" IN 
                          (SELECT "vendorUserId" FROM "vendors_services"
                            WHERE "serviceId" = $1); `;
    pool
      .query(queryText, [typeId])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('retrieve filter failed: ', err);
        res.sendStatus(500);
      });
  } else if (typeId === "-1") {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                      JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE "vendorUserId" IN 
                       (
                       SELECT "vendorUserId" FROM "vendors_features"
                       WHERE "featureId" = $1
                       ); `;
    pool
      .query(queryText, [featureId])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('retrieve filter failed: ', err);
        res.sendStatus(500);
      });
  } else {
    const queryText = `SELECT "companyName", "profilePic" FROM "vendors"
                       WHERE ("vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_services" WHERE "serviceId" = $1 ))
                       AND
                       ( "vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_features" WHERE "featureId" = $2 ))
                       `;
    pool
      .query(queryText, [typeId, featureId])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('retrieve filter failed: ', err);
        res.sendStatus(500);
      });
  }
});
module.exports = router;