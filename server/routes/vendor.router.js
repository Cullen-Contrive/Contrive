const express = require('express');
const pool = require('../modules/pool');
const insertSerializer = require('../modules/insertSerializer');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for /api/vendor/all
 */
router.get('/all', rejectUnauthenticated, (req, res) => {
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
  FULL OUTER JOIN "vendors_features" ON "vendors"."vendorUserId" = "vendors_features"."vendorUserId"
  FULL OUTER JOIN "special_features" ON "vendors_features"."featureId" = "special_features"."id"
  FULL OUTER JOIN "vendors_services" ON "vendors"."vendorUserId" = "vendors_services"."vendorUserId"
  FULL OUTER JOIN "service_types" ON "vendors_services"."serviceId" = "service_types"."id"
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
    .then((dbRes) => {
      console.log('SERVER - GET request at /api/vendor/all successful');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/vendor an error occurred', err);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/vendor/id
 */
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
  "vendors"."companyName",
  JSON_AGG(DISTINCT "service_types".*) AS "serviceTypes", 
  JSON_AGG(DISTINCT "special_features".*) AS "specialFeatures"
  FROM "users"
  JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId" 
  FULL OUTER JOIN "vendors_features" ON "vendors"."vendorUserId" = "vendors_features"."vendorUserId"
  FULL OUTER JOIN "special_features" ON "vendors_features"."featureId" = "special_features"."id"
  FULL OUTER JOIN "vendors_services" ON "vendors"."vendorUserId" = "vendors_services"."vendorUserId"
  FULL OUTER JOIN "service_types" ON "vendors_services"."serviceId" = "service_types"."id"
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

/**
 * GET route for /api/vendor/update
 */
router.put('/update', rejectUnauthenticated, async (req, res) => {
  console.log('POST /api/vendor/update here is what we got:', req.body);
  const connection = await pool.connect();

  const userId = req.user.id;
  const updatedSpecialFeatures = [userId];
  const updatedServiceTypes = [userId];
  for (let feature of req.body.specialFeatures) {
    updatedSpecialFeatures.push(feature.id);
  }
  for (let serviceType of req.body.serviceTypes) {
    updatedServiceTypes.push(serviceType.id);
  }
  console.log('user id:', userId);
  console.log('updatedSpecialFeatures', updatedSpecialFeatures);

  const sqlTextVendors = `
    UPDATE "vendors"
    SET
      "companyName" = $1,
      "description" = $2, 
      "additionalInfo" = $3, 
      "phone" = $4
    WHERE "vendorUserId" = $5;
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

  const sqlTextDeleteVendorFeatures = `
    DELETE FROM "vendors_features"
    WHERE "vendorUserId" = $1;
  `;

  const sqlTextInsertVendorFeatures = `
    INSERT INTO "vendors_features" ("vendorUserId", "featureId")
    VALUES ${insertSerializer(req.body.specialFeatures)}
  `;

  const sqlTextDeleteVendorServices = `
    DELETE FROM "vendors_services"
    WHERE "vendorUserId" = $1;
  `;

  const sqlTextInsertVendorServices = `
    INSERT INTO "vendors_services" ("vendorUserId", "serviceId")
    VALUES ${insertSerializer(req.body.serviceTypes)}
  `;

  console.log('sqlTextInsertUserFeatures', sqlTextInsertVendorFeatures);

  const updateValuesVendors = [
    req.body.companyName,
    req.body.description,
    req.body.additionalInfo,
    req.body.phone,
    userId,
  ];

  const updateValuesUsers = [
    req.body.website,
    req.body.profilePic,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.zip,
    userId,
  ];

  try {
    await connection.query('BEGIN');
    await connection.query(sqlTextVendors, updateValuesVendors);
    await connection.query(sqlTextUsers, updateValuesUsers);
    await connection.query(sqlTextDeleteVendorFeatures, [userId]);
    await connection.query(sqlTextInsertVendorFeatures, updatedSpecialFeatures);
    await connection.query(sqlTextDeleteVendorServices, [userId]);
    await connection.query(sqlTextInsertVendorServices, updatedServiceTypes);
    await connection.query('COMMIT');
    res.sendStatus(200);
  } catch (err) {
    console.log('Error updating vendor profile:', err);
    await connection.query('ROLLBACK');
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

/**
 * DELETE endpoint for /api/vendor/delete/:id
 *
 * req.params.id looks like:
 * {
 *  23  int
 * }
 */
router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
  // Variable to replace "magic number"
  const userIdToDelete = req.params.id;

  // Only allow administrators to remove vendors from DB
  if (req.user.type !== 'admin') {
    console.log('***** UNAUTHORIZED PERSONNEL *****');
    res.sendStatus(404);
    return;
  }

  // Query used on DB
  const sqlQuery = `
  DELETE FROM "users"
  WHERE "users".id = $1;
  `;

  // SQL Transaction
  pool
    .query(sqlQuery, [userIdToDelete])
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR in DELETE /api/vendor/delete/:id', error);
      res.sendStatus(500);
    });
});

module.exports = router;
