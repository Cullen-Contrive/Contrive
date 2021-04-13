const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const sqlText = `
  SELECT "users"."website", 
  "vendors"."vendorUserId",
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified", 
  "vendors"."companyName",
  ARRAY_AGG(DISTINCT "service_types"."name"), 
  ARRAY_AGG(DISTINCT "special_features"."name")
  FROM "users"
  JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId" 
  JOIN "vendors_features" ON "vendors"."vendorUserId" = "vendors_features"."vendorUserId"
  JOIN "special_features" ON "vendors_features"."featureId" = "special_features"."id"
  JOIN "vendors_services" ON "vendors"."vendorUserId" = "vendors_services"."vendorUserId"
  JOIN "service_types" ON "vendors_services"."serviceId" = "service_types"."id"
  WHERE "users"."type" = 'vendor'
  GROUP BY 
  "users"."website",
  "vendors"."vendorUserId", 
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified", 
  "vendors"."companyName";`;

  pool
    .query(sqlText)
    .then((dbRes) => {
      console.log('SERVER - GET request at /api/vendor successful');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/vendor an error occurred', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
