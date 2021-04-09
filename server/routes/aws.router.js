// ROUTER IS NOT USED
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// THIS WILL PROBABLY BE AN EMPTY FILE, FOR REFERENCE ONLY

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

// // AWS ADD Artwork
// router.post('/', (req, res) => {
//   console.log('AWS POST ARTWORK req.body', req.body.aws);
//   const aws = req.body.aws;

//   const queryString = `INSERT INTO artwork ("image") VALUES ($1) WHERE "id" = $2`;

//   pool.query(queryString, [aws, req.body.id])
//   .then((result) => {
//     res.sendStatus(200);
//   }) .catch((err) => {
//     console.log('AWS ARTWORK POSTING TO DB FAILED: ', err);
//     res.sendStatus(500);
//   });
// });

// // AWS ADD IMAGE
// router.post('/', (req, res) => {
//   console.log('AWS POST PFP req.body', req.body.awsPFP);
//   const awsPFP = req.body.awsPFP;

//   const queryString = `INSERT INTO "user" ("pfp") VALUES ($1) WHERE "id" = $2`;

//   pool.query(queryString, [awsPFP, req.body.id])
//   .then((result) => {
//     res.sendStatus(200);
//   }) .catch((err) => {
//     console.log('AWS PFP POSTING TO DB FAILED: ', err);
//     res.sendStatus(500);
//   });
// });

module.exports = router;
