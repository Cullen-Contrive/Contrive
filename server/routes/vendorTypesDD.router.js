const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {    
  const queryText = `SELECT * FROM "service_types" ORDER BY "name" asc`;
  pool
    .query(queryText)
    .then((result) => {
      console.log('retrieve vendor types list is:', result.rows);
      res.send(result.rows);
    })
  .catch((err) => {
    console.log('retrieve vendor types list failed: ', err);
    res.sendStatus(500);
  });
});

module.exports = router;
