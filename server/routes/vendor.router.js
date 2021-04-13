const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ROUTES AT /api/vendor/all
router.get('/all', (req, res) => {
  const sqlText = `
  SELECT 
  "users"."username",
  "users"."website",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip", 
  "vendors"."vendorUserId",
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified", 
  "vendors"."companyName",
  ARRAY_AGG(DISTINCT "service_types"."name") AS "service_types", 
  ARRAY_AGG(DISTINCT "special_features"."name") AS "special_features"
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

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const sqlText = `
  SELECT 
  "users"."username",
  "users"."website",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip",
  "vendors"."vendorUserId",
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified", 
  "vendors"."companyName",
  ARRAY_AGG(DISTINCT "service_types"."name") AS "service_types", 
  ARRAY_AGG(DISTINCT "special_features"."name") AS "special_features"
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

module.exports = router;
