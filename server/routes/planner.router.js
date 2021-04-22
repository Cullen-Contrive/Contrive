const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET endpoint for /api/planner/admin
 *
 * Returns a list of all planners with the following properties:
 * - id
 * - firstName
 * - lastName
 */
router.get('/admin', rejectUnauthenticated, (req, res) => {
  //Query used to ping DB
  const sqlQuery = `
  SELECT "users".id, "users"."firstName", "users"."lastName"
  FROM "users"
  WHERE "users".type = 'planner'
  ORDER BY "users"."firstName" ASC;
  `;

  // Get list of all planners from DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      res.send(dbResponse);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/planner/admin:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
