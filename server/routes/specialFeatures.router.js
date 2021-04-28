const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// This route selects all special features types, and is not protected because we
// use this information on the registration page, before a user is authenticated
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "special_features" ORDER BY "name" asc;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('retrieve special features list failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
