const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for /api/types
 */
router.get('/', (req, res) => {
  // Used for grabbing all types of events to display a list of options for user
  const queryText = `
  SELECT * 
  FROM "types_of_event";`;
  pool
    .query(queryText)
    .then((dbRes) => {
      console.log('SERVER - GET at /api/event/types successful!');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/event/types an error occurred!', err);
    });
});

module.exports = router;
