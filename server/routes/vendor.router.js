const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// ROUTES AT /api/vendor/all
router.get('/all', rejectUnauthenticated, (req, res) => {
  const sqlText = `
  SELECT
  "users"."username",
  "users"."website",
  "users"."profilePic",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip",
  "vendors"."vendorUserId",
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified",
  JSON_AGG(DISTINCT "service_types".*) AS "service_types", 
  JSON_AGG(DISTINCT "special_features".*) AS "special_features"
  FROM "users"
  JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId" 
  JOIN "vendors_features" ON "vendors"."vendorUserId" = "vendors_features"."vendorUserId"
  JOIN "special_features" ON "vendors_features"."featureId" = "special_features"."id"
  JOIN "vendors_services" ON "vendors"."vendorUserId" = "vendors_services"."vendorUserId"
  JOIN "service_types" ON "vendors_services"."serviceId" = "service_types"."id"
  WHERE "users"."type" = 'vendor'
  GROUP BY 
  "users"."username",
  "users"."website",
  "users"."profilePic",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip",
  "vendors"."vendorUserId", 
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified", 
  "vendors"."companyName";`;

  pool
    .query(sqlText)
    .then((dbRes) => {
      console.log('SERVER - GET request at /api/vendor/all successful');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/vendor an error occurred', err);
      res.sendStatus(500);
    });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const userId = req.params.id;
  const sqlText = `
  SELECT
  "users"."username",
  "users"."website",
  "users"."profilePic",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip",
  "vendors"."vendorUserId",
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified",
  JSON_AGG(DISTINCT "service_types".*) AS "service_types", 
  JSON_AGG(DISTINCT "special_features".*) AS "special_features"
  FROM "users"
  JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId" 
  JOIN "vendors_features" ON "vendors"."vendorUserId" = "vendors_features"."vendorUserId"
  JOIN "special_features" ON "vendors_features"."featureId" = "special_features"."id"
  JOIN "vendors_services" ON "vendors"."vendorUserId" = "vendors_services"."vendorUserId"
  JOIN "service_types" ON "vendors_services"."serviceId" = "service_types"."id"
  WHERE "users"."type" = 'vendor' AND "users"."id" = $1
  GROUP BY 
  "users"."username",
  "users"."website",
  "users"."profilePic",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip",
  "vendors"."vendorUserId", 
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified", 
  "vendors"."companyName";
  `;

  pool
    .query(sqlText, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET request at /api/vendor/id successful');
      res.send(dbRes.rows[0]);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/vendor an error occurred', err);
      res.sendStatus(500);
    });
});

router.put('/update', rejectUnauthenticated, async (req, res) => {
  console.log('POST /api/vendor/update here is what we got:', req.body);
  const connection = await pool.connect();
  
  const userId = req.user.id;
  console.log('user id:', userId)


  const sqlTextVendors = `
    UPDATE "vendors"
    SET
      "description" = $1, 
      "additionalInfo" = $2, 
      "phone" = $3
    WHERE "vendorUserId" = $4;
  `;

  const sqlTextUsers = `
    UPDATE "users"
    SET
      "website" = $1,
      "profilePic" = $2,
      "address" = $3, 
        "city" = $4, 
        "state" = $5, 
        "zip" = $6
    WHERE "id" = $7;
  `;

  const updateValuesVendors = [
    req.body.description,
    req.body.additionalInfo,
    req.body.phone,
    userId
  ];

  const updateValuesUsers = [
    req.body.website,
    req.body.profilePic,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.zip,
    userId
  ];

  try {
    await connection.query('BEGIN')
    await connection.query(sqlTextVendors, updateValuesVendors);
    await connection.query(sqlTextUsers, updateValuesUsers);
    await connection.query('COMMIT');
    res.sendStatus(200);
  } catch (err) {
    console.log('Error updating vendor profile:', err);
    await connection.query('ROLLBACK');
    res.sendStatus(500);
  } finally {
    connection.release();
  }

})

module.exports = router;
