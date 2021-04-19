// Server-side Component to handle all search requests from the SearchNetwork
const express = require('express');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');


router.get('/typeId=:typeID/featureId=:featureID/searchTerm=:searchTerm', rejectUnauthenticated, (req, res) => {
  // Variables to hold search parameters sent via the API URL (above)
  const typeId = Number(req.params.typeID);
  const featureId = Number(req.params.featureID);
  const searchTerm = req.params.searchTerm;
  // console.log('vendor type=', typeId);
  // console.log('special feature', featureId);
  // console.log('search Term', searchTerm);

  // If none of the 3 filter options given, return all vendors:
  if (searchTerm === "37423573209" && typeId === -1 && featureId === -1) {
    const sqlText = `
  SELECT
  "users"."username",
  "users"."website",
  "users"."firstName",
  "users"."lastName",
  "users"."profilePic",
  "users"."address", 
  "users"."city", 
  "users"."state", 
  "users"."zip",
  "vendors"."companyName",
  "vendors"."vendorUserId",
  "vendors"."description", 
  "vendors"."additionalInfo", 
  "vendors"."phone", 
  "vendors"."certified",
  "vendors"."companyName",
  JSON_AGG(DISTINCT "service_types".*) AS "serviceTypes", 
  JSON_AGG(DISTINCT "special_features".*) AS "specialFeatures"
  FROM "users"
  JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId" 
  JOIN "vendors_features" ON "vendors"."vendorUserId" = "vendors_features"."vendorUserId"
  JOIN "special_features" ON "vendors_features"."featureId" = "special_features"."id"
  JOIN "vendors_services" ON "vendors"."vendorUserId" = "vendors_services"."vendorUserId"
  JOIN "service_types" ON "vendors_services"."serviceId" = "service_types"."id"
  WHERE "users"."type" = 'vendor'
  GROUP BY 
  "users"."username",
  "users"."firstName",
  "users"."lastName",
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
      .then((result) => {
        console.log('SERVER - for NO type, feature, nor search term  successful');
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('SERVER - for NO type, feature, nor search term an error occurred:', err);
        res.sendStatus(500);
      });
  }
  // If no special feature nor search term selected, filter only for the vendor type:
  else if (featureId === -1 && searchTerm === "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
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

  }
  // If no vendor type nor search term selected, filter only for the special feature:
  else if (typeId === -1 && searchTerm === "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
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

  }
  // If no special feature nor vendor type selected, filter only for the search term:
  else if (typeId === -1 && featureId === -1) {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
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

  }
  // If special feature and search term given but no vendor type:
  else if (typeId === -1 && featureId != -1 && searchTerm != "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE ( "vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_features" WHERE "featureId" = $1 ))
                       AND
                       "vendors"."companyName" ILIKE '%' || $2 || '%';
                       ;`

    pool.query(queryText, [featureId, searchTerm])
      .then((result) => {
        console.log('SERVER - GET - at /api/search - received a response');
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Feature and Search - an error occurred getting filter results', err);
        res.sendStatus(500);
      });
  }
  // If vendor type and search term given but no special feature:
  else if (featureId === -1 && typeId != -1 && searchTerm != "37423573209") {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
                       JOIN "users" ON "vendors"."vendorUserId" = "users".id
                       WHERE ("vendorUserId" IN 
                       ( SELECT "vendorUserId" FROM "vendors_services" WHERE "serviceId" = $1 ))
                       AND
                       "vendors"."companyName" ILIKE '%' || $2 || '%';
                       `;

    pool.query(queryText, [typeId, searchTerm])
      .then((result) => {
        console.log('SERVER - GET - at /api/search - received a response');
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Type and SearchTerm filter failed', err);
        res.sendStatus(500);
      });
  }
  // If vendor type and special feature given but no search term:
  else if (searchTerm === "37423573209" && typeId != -1 && featureId != -1) {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
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
  }
  // If all 3 search options given:
  else if (searchTerm != "37423573209" && typeId != -1 && featureId != -1) {
    const queryText = `SELECT "vendors"."companyName", "vendors"."vendorUserId", "users"."profilePic" FROM "vendors"
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