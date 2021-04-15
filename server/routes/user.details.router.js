const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // Gets user info based on currently logged in user
  const userId = req.user.id;
  const queryText = `
  SELECT 
  "firstName", 
  "lastName", 
  "type", 
  "photo"
  FROM "users" 
  JOIN "users_photos" ON "users"."id" = "users_photos"."userId" 
  WHERE "users"."id" = $1
  GROUP BY 
  "firstName", 
  "lastName", 
  "type", 
  "photo";`;

  pool
    .query(queryText, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET - user details successful!');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET - an error occurred getting user details');
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  // Gets user info based on passed in params
  const userId = req.params.id;
  const queryText = `
  SELECT 
  "type", 
  "photo"
  FROM "users" 
  JOIN "users_photos" ON "users"."id" = "users_photos"."userId" 
  WHERE "users"."id" = $1
  GROUP BY 
  "type", 
  "photo";`;

  pool
    .query(queryText, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET - user type and photo successful!');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET - an error occurred getting user details');
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
