const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for /api/user/details/
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // Gets user info based on currently logged in user
  const userId = req.user.id;
  const queryText = `
  SELECT 
  "firstName", 
  "lastName", 
  "type", 
  "profilePic"
  FROM "users" 
  WHERE "users".id = $1`;

  pool
    .query(queryText, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET - user details by current user successful!');
      console.table(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error(
        'SERVER - GET - an error occurred getting current user details'
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/user/details/id
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // Gets user info based on passed in params
  // Used for gathering info on conversation partner for display
  const userId = req.params.id;
  const queryText = `
  SELECT 
  "firstName", 
  "lastName", 
  "type", 
  "profilePic"
  FROM "users"
  WHERE "users".id = $1`;

  pool
    .query(queryText, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET - user details by id successful!');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET - an error occurred getting user details');
      res.sendStatus(500);
    });
});

module.exports = router;
