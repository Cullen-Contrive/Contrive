const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
  // GET ROUTE - Gets Messages
  // use req.user.id
  const queryText = `SELECT * FROM "messages" WHERE "messages"."fromUser" = 2 OR "messages"."toUser" = 2;`;

  pool
    .query(queryText)
    .then((dbRes) => {
      console.log('SERVER - GET - at /api/message - received a response');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - an error occurred', err);
      res.sendStatus(500);
    });
});

module.exports = router;
