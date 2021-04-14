const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  // User table info:
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.companyAddress;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const type = req.body.type;
  const website = req.body.website;


  // Vendor table info:
  const companyName = req.body.companyName;
  const description = req.body.description;
  const additionalInfo = req.body.additionalInfo;
  const phone = req.body.phone;

  // console.log('username:', username);
  // console.log('password', password);
  // console.log('firstName', firstName);
  // console.log('lastName', lastName);
  // console.log('website', website);
  // console.log('type', type);
  // console.log('companyAddress:', companyAddress);
  // console.log('city:', city);
  // console.log('state', state);
  // console.log('zip', zip);
  // console.log('companyName', companyName);
  // console.log('phone', phone);
  // console.log('description:', description);

  const queryText = `INSERT INTO "users" ("username", "password", "firstName", 
  "lastName", "address", "city", "state", "zip", "type", "website")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`;

  // const queryText = `INSERT INTO "users" ("username", "password", "firstName", )`
  pool
    .query(queryText, [username, password, firstName, lastName, address, city, state, zip, type, website])
    .then((dbRes) => {
      if (type === 'vendor') {
        // console.log('dbRes:', dbRes);
        const vendorUserId = dbRes.rows[0].id;
        const sqlQuery = `INSERT INTO "vendors" ("vendorUserId", "companyName", "description", 
      "additionalInfo", "phone")
        VALUES ($1, $2, $3, $4, $5);`

        pool.query(sqlQuery, [vendorUserId, companyName, description, additionalInfo, phone])
      }

      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  console.log('!!****&&&&&!!!!!!!!! req.body:', req.body);
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
