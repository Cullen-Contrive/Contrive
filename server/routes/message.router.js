const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/all', rejectUnauthenticated, (req, res) => {
  // GET ROUTE - Gets all messages for currently logged-in user
  const userId = req.user.id;

  if (req.user.type === 'planner') {
    const plannerQueryText = `
    SELECT DISTINCT 
      ON(GREATEST("fromUser", "toUser"), LEAST("fromUser", "toUser")) 
      GREATEST("fromUser", "toUser") as "otherUserId", 
      LEAST("fromUser", "toUser") as "userId", 
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
    pool
      .query(plannerQueryText, [userId])
      .then((dbRes) => {
        // console.log('SERVER - GET - at /api/message/all - received a response');
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.error(
          'SERVER - GET at /api/message/all for PLANNER - an error occurred',
          err
        );
        res.sendStatus(500);
      });

  } else if (req.user.type === 'vendor') {
    // Array to hold all individualCommunicator objects
    const communicationList = [];

    // Object to hold each individual "other user's" details
    let individualCommunicator = {
      otherUserId: 0,
      firstName: '',
      lastName: '',
      profilePic: '',
      recentMessage: '',
      messageDate: '',
      userId,
    };

    const vendorQueryText = `
    WITH "sendingUsers" AS 
  	(SELECT "fromUser", "toUser", "date", "message" 
  		FROM "messages" 
  		WHERE "fromUser" = $1  OR "toUser" = $1 
  		ORDER BY "date" DESC ),
  "receivingUsers" AS 
  (SELECT "fromUser", "toUser" 
  		FROM "messages" 
  		WHERE "fromUser" = $1 OR "toUser" = $1  
  		ORDER BY "date" DESC ) 
    SELECT DISTINCT "users".id, "users"."firstName", "users"."lastName", "users"."profilePic" 
    FROM "users"
    JOIN "sendingUsers" ON "users".id = "sendingUsers"."fromUser" 
    JOIN "receivingUsers" ON "users".id = "receivingUsers"."toUser"
    WHERE "users".id = "sendingUsers"."fromUser" OR "users".id = "receivingUsers"."toUser";
`;
    pool
      .query(vendorQueryText, [userId])
      .then((dbRes) => {
        console.log('11111111111111 VENDOR DBRES TO GET USER LIST:', dbRes.rows);

        const allOtherUsers = dbRes.rows;
        for (let otherUser of allOtherUsers) {
          if (otherUser.id != userId) {
            individualCommunicator.otherUserId = otherUser.id;
            individualCommunicator.firstName = otherUser.firstName;
            individualCommunicator.lastName = otherUser.lastName;
            individualCommunicator.profilePic = otherUser.profilePic;

            console.log('11111111111111.2: individualCommunicator AFTER FIRST QUERY:', individualCommunicator);
            communicationList.push(individualCommunicator);

            console.log('11111111111111.3: communicationList after FIRST QUERY:', communicationList);

            const messageQueryText = `
            SELECT "messages"."message", to_char("date", 'DD MON YYYY HH:MI AM') AS "dateReceived" 
            FROM "messages" 
            WHERE "messages"."fromUser" IN ($1, $2) AND "messages"."toUser" IN ($1, $2)
            ORDER BY "dateReceived"  DESC
            LIMIT 1;
            `;
            pool.query(messageQueryText, [userId, otherUser.id])
              .then((dbResult) => {
                console.log('MESSAGE QUERY dbRes.rows:', dbResult.rows);
                let messageInfo = dbResult.rows[0];

                individualCommunicator.recentMessage = messageInfo.message;
                individualCommunicator.messageDate = messageInfo.dateReceived;

                console.log('individualCommunicator AFTER SECOND QUERY:', individualCommunicator);

                communicationList.push(individualCommunicator);
                console.log('communicationList after BOTH QUERIES:', communicationList);

              })
              .catch((err) => {
                console.error(
                  'SERVER - GET at /api/message/all for VENDOR MESSAGES - an error occurred',
                  err
                );
                res.sendStatus(500);
              })
          }
        }
        // After looping through each of the other user Id's and retrieving their most recent 
        // message with logged-in user, end this info back to the client
        res.send(communicationList);
      })
      .catch((err) => {
        console.error(
          'SERVER - GET at /api/message/all for VENDOR - an error occurred',
          err
        );
        res.sendStatus(500);
      });
  }

});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  // GET ROUTE - Gets Messages between two users
  const fromUser = req.user.id;
  console.log('fromUser', fromUser);
  const toUser = req.params.id;
  console.log('toUser', toUser);
  const queryText = `SELECT "fromUser", "toUser", "message", 
  to_char("date", 'DD MON YYYY HH:MI AM') AS "dateReceived"
  FROM "messages" 
  WHERE 
  "messages"."fromUser" = $1 AND "messages"."toUser" = $2
  OR "messages"."toUser" = $1 AND "messages"."fromUser" = $2
  ORDER BY "date" ASC;`;

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
