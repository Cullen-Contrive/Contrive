const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/:searchTerm', rejectUnauthenticated, (req, res) => {
  console.log('!!!!%%%%%%%%%%% req.params:', req.params.searchTerm);
  const searchTerm = req.params.searchTerm;

  queryText = `SELECT * FROM "vendors"
  WHERE "companyName" ILIKE '%' || $1 || '%';`

  pool.query(queryText, [searchTerm])
    .then((dbRes) => {
      console.log('SERVER - GET - at /api/search - received a response');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - an error occurred getting search results', err);
      res.sendStatus(500);
    });

});

module.exports = router;