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

router.post('/', async (req, res) => {
  try {
    const queryText = `
    INSERT INTO "messages" ("fromUser", 
                            "toUser", 
                            "date", 
                            "message")
    VALUES ($1, $2, $3, $4);`;

    await Promise.all(
      req.body.map((message) =>
        pool.query(queryText, [
          message.fromUser,
          message.toUser,
          message.date,
          message.message,
        ])
      )
    );
    res.sendStatus(201);
  } catch (err) {
    console.error('SERVER - POST - at /api/message - an error occurred');
    res.sendStatus(500);
  }
});

module.exports = router;
