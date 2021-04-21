const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/all', rejectUnauthenticated, (req, res) => {
  // GET ROUTE - Gets all messages for currently logged-in user
  const user = req.user.id;

  let queryText;
  if (req.user.type === 'planner') {
    queryText = `
    SELECT DISTINCT 
      ON(GREATEST("fromUser", "toUser"), LEAST("fromUser", "toUser")) 
      GREATEST("fromUser", "toUser"), 
      LEAST("fromUser", "toUser"), 
      "date" AS "maxDate", 
      "message",
      "users"."firstName",
      "users"."lastName",
      "vendors"."companyName",
      "users"."profilePic"
    FROM "messages"
    JOIN "users"
      ON "messages"."fromUser" = "users"."id" OR "messages"."toUser" = "users"."id"
    RIGHT OUTER JOIN "vendors"
      On "users"."id" = "vendors"."vendorUserId"
    WHERE "fromUser" = $1
      OR "toUser" = $1
    ORDER BY GREATEST("fromUser", "toUser"), LEAST("fromUser", "toUser"), "maxDate" ASC;
  `;
  } else if (req.user.type === 'vendor') {
    queryText = `
    SELECT DISTINCT 
    ON(GREATEST("fromUser", "toUser"), LEAST("fromUser", "toUser")) 
    GREATEST("fromUser", "toUser"), 
    LEAST("fromUser", "toUser"), 
    "date" AS "maxDate", 
    "message",
    "users"."firstName",
    "users"."lastName",
    "users"."profilePic"
  FROM "messages"
  FULL OUTER JOIN "users"
    ON "messages"."fromUser" = "users"."id" OR "messages"."toUser" = "users"."id"
  WHERE "fromUser" = $1
    OR "toUser" = $1
  ORDER BY GREATEST("fromUser", "toUser"), LEAST("fromUser", "toUser"), "maxDate" ASC;`;
  }

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
  console.log('fromUser', fromUser);
  const toUser = req.params.id;
  console.log('toUser', toUser);
  const queryText = `SELECT "fromUser", "toUser", "message", 
  to_char("date", 'DD MON YYYY HH:MI AM') AS "date"
  FROM "messages" 
  WHERE 
  "messages"."fromUser" = $1 AND "messages"."toUser" = $2
  OR "messages"."toUser" = $1 AND "messages"."fromUser" = $2;`;

  pool
    .query(queryText, [fromUser, toUser])
    .then((dbRes) => {
      console.log('SERVER - GET at /api/message/id - received a response');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET at /api/message/id - an error occurred', err);
      res.sendStatus(500);
    });
});

router.post('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
  INSERT INTO "messages" ("fromUser", 
  "toUser", 
  "date", 
  "message")
  VALUES ($1, $2, $3, $4);`;

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

router.post('/bulk', rejectUnauthenticated, async (req, res) => {
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
    console.error('SERVER - POST - at /api/message/bulk - an error occurred');
    res.sendStatus(500);
  }
});

module.exports = router;
