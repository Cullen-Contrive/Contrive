const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/typeId=:typeID/featureId=:featureID/searchTerm=:searchTerm', (req, res) => {
  const typeId = Number(req.params.typeID);
  const featureId = Number(req.params.featureID);
  const searchTerm = req.params.searchTerm;
  console.log('vendor type=', typeId);
  console.log('special feature', featureId);
  console.log('search Term', searchTerm);

  if (featureId === -1 && searchTerm === "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE "vendorUserId" IN 
                       (SELECT "vendorUserId" FROM "vendors_services"
                       WHERE "serviceId" = $1); 
                       `;
    pool
      .query(queryText, [typeId])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('retrieve Type filter failed: ', err);
        res.sendStatus(500);
      });

  } else if (typeId === -1 && searchTerm === "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE "vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_features"
                       WHERE "featureId" = $1 ); 
                       `;
    pool
      .query(queryText, [featureId])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('FeatureId filter Failed: ', err);
        res.sendStatus(500);
      });

  } else if (typeId === -1 && featureId === -1) {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE "companyName" ILIKE '%' || $1 || '%'; 
                       `;
    pool.query(queryText, [searchTerm])
      .then((result) => {
        console.log('SERVER - GET - at /api/search - received a response');
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('SearchTerm filter failed', err);
        res.sendStatus(500);
      });

  } else if (typeId === -1 && featureId != -1 && searchTerm != "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE ( "vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_features" WHERE "featureId" = $1 ))
                       AND
                       "vendors"."companyName" ILIKE '%' || $2 || '%';
                       ;`

    pool.query(queryText, [featureId, searchTerm])
      .then((result) => {
        console.log('SERVER - GET - at /api/filter - received a response');
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Feature and Search - an error occurred getting filter results', err);
        res.sendStatus(500);
      });

  } else if (featureId === -1 && typeId != -1 && searchTerm != "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE ("vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_services" WHERE "serviceId" = $1 ))
                       AND
                       "vendors"."companyName" ILIKE '%' || $2 || '%';
                       `;

    pool.query(queryText, [typeId, searchTerm])
      .then((result) => {
        console.log('SERVER - GET - at /api/filter - received a response');
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Type and SearchTerm filter failed', err);
        res.sendStatus(500);
      });

  } else if (searchTerm === "37423573209" && typeId != -1 && featureId != -1) {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE ("vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_services" WHERE "serviceId" = $1 ))
                       AND
                       ( "vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_features" WHERE "featureId" = $2 ));
                       `;
    pool
      .query(queryText, [typeId, featureId])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('Type AND Feature filter failed: ', err);
        res.sendStatus(500);
      });

  } else if (searchTerm != "37423573209" && typeId != -1 && featureId != -1) {
    const queryText = `SELECT "vendors"."companyName", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE ("vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_services" WHERE "serviceId" = $1 ))
                       AND
                       ( "vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_features" WHERE "featureId" = $2 ))
                       AND
                       "vendors"."companyName" ILIKE '%' || $3 || '%';
                       `;
    pool
      .query(queryText, [typeId, featureId, searchTerm])
      .then((result) => {
        console.log('retrieve filter list is:', result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('retrieve all 3 filter failed: ', err);
        res.sendStatus(500);
      });

  }
});
module.exports = router;