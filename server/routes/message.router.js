const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/all', rejectUnauthenticated, (req, res) => {
  // GET ROUTE - Gets all messages for currently logged-in user
  const user = req.user.id;
  const queryText = `SELECT * FROM "messages" WHERE "messages"."fromUser" = $1 OR "messages"."toUser" = $1;`;

  pool
    .query(queryText, [user])
    .then((dbRes) => {
      console.log('SERVER - GET - at /api/message/all - received a response');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error(
        'SERVER - GET at /api/message/all - an error occurred',
        err
      );
      res.sendStatus(500);
    });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  // GET ROUTE - Gets Messages between two users
  const fromUser = req.user.id;
  const toUser = req.params.id;
  const queryText = ` SELECT * FROM "messages" WHERE 
  "messages"."fromUser" = $1 AND "messages"."toUser" = $2
  OR "messages"."toUser" = $1 AND "messages"."fromUser" =$2;`;

  pool
    .query(queryText, [fromUser, toUser])
    .then((dbRes) => {
      console.log('SERVER - GET at /api/message/id - received a response');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/message/id - an error occurred');
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const queryText = `
  INSERT INTO "messages" ("fromUser", 
  "toUser", 
  "date", 
  "message")
  VALUES ($1, $2, $3, $4);`;

  console.log('req.body', req.body);

  pool
    .query(queryText, [
      req.body.fromUser,
      req.body.toUser,
      req.body.date,
      req.body.message,
    ])
    .then((dbRes) => {
      console.log('SERVER - GET - at /api/message - received a response');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/message', err);
      res.sendStatus(500);
    });
});

router.post('/outgoing', async (req, res) => {
  try {
    console.log('SERVER - POST - to messages');

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
