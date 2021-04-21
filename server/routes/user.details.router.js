const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for /api/user/details/ 
 * yields all messages linked with the logged in user
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // Gets user info based on currently logged in user
  const userId = req.user.id;
  const queryText = `
  SELECT 
  "users"."id",
  "firstName", 
  "lastName", 
  "type", 
  "profilePic", 
  "companyName",
  JSON_AGG(DISTINCT "users_photos".*) AS "userPhotos"
  FROM "users"
  JOIN "users_photos" ON "users"."id" = "users_photos"."userId" 
  LEFT OUTER JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId"
  WHERE "users".id = $1
  GROUP BY 
  "users"."id",
  "firstName", 
  "lastName", 
  "type", 
  "profilePic", 
  "companyName";`;

  pool
    .query(queryText, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET - user details by current user successful!');
      res.send(dbRes.rows[0]);
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
 * yields all messages between the logged in user and one other user
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // Gets user info based on passed in params
  // Used for gathering info on conversation partner for display
  const otherUserId = req.params.id;

  const queryText = `SELECT 
  "users"."id",
  "username",
  "firstName", 
  "lastName",
  "profilePic", 
  "address",
  "city",
  "state",
  "zip",
  "type", 
  "website",
  "bio",
  "companyName", 
  "description", 
  "additionalInfo", 
  "phone", 
  "certified"
  FROM "users"
  LEFT OUTER JOIN "vendors" ON "users"."id" = "vendors"."vendorUserId"
  WHERE "users".id = $1
  GROUP BY 
  "users"."id",
  "firstName", 
  "lastName", 
  "type", 
  "profilePic", 
  "companyName",
  "description", "additionalInfo", "phone", "certified";`;

  pool
    .query(queryText, [otherUserId])
    .then((dbRes) => {
      console.log('SERVER - GET - user details by id successful!');
      res.send(dbRes.rows[0]);
    })
    .catch((err) => {
      console.error('SERVER - GET - an error occurred getting user details');
      res.sendStatus(500);
    });
});

module.exports = router;
