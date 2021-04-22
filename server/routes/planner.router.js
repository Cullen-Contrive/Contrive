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
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/planner/admin:', error);
      res.sendStatus(500);
    });
});

/**
 * DELETE endpoint for /api/planner/delete/:id
 *
 * req.params.id looks like:
 * {
 *  5  int
 * }
 */
router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
  // Variable to replace "magic number"
  const userIdToDelete = req.params.id;

  // Only allow administrators to remove planners from DB
  if (req.user.type !== 'admin') {
    console.log('***** UNAUTHORIZED PERSONNEL *****');
    res.sendStatus(404);
    return;
  }

  // Query used to ping DB
  const sqlQuery = `
  DELETE FROM "users"
  WHERE "users".id = $1;
  `;

  // SQL Transaction to remove a planner from the DB
  pool
    .query(sqlQuery, [userIdToDelete])
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR in DELETE /api/planner/delete/:id:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
