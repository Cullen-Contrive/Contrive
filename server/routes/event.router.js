const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for /api/event
 */
router.get('/', (req, res) => {
  // Grabs all events
  const queryText = `
  SELECT 
  "events"."id",
  "events"."dateOfEvent", 
  "events"."timeOfEvent", 
  "events"."address", 
  "events"."city", 
  "events"."state", 
  "events"."zip",
  "events"."numberOfAttendees",
  "events"."description",
  "vendors"."companyName",
  "users"."firstName",
  "users"."lastName",
  JSON_AGG("events_photos".*) AS "eventsPhotos", 
  JSON_AGG("events_types".*) AS "eventsTypes", 
  JSON_AGG("events_vendors".*) AS "eventsVendors"
  FROM "events"
  LEFT OUTER JOIN "events_photos" ON "events"."id" = "events_photos"."eventId" 
  LEFT OUTER JOIN "events_types" ON "events"."id" = "events_types"."eventId" 
  LEFT OUTER JOIN "types_of_event" ON "events_types"."typeId" = "types_of_event"."id"
  LEFT OUTER JOIN "events_vendors" ON "events"."id" = "events_vendors"."eventId"
  LEFT OUTER JOIN "vendors" ON "events_vendors"."vendorUserId" = "vendors"."vendorUserId"
  LEFT OUTER JOIN "users" ON "users"."id" = "vendors"."vendorUserId"
  GROUP BY 
  "events"."id",
  "events"."dateOfEvent", 
  "events"."timeOfEvent", 
  "events"."address", 
  "events"."city", 
  "events"."state", 
  "events"."zip",
  "events"."numberOfAttendees",
  "events"."description",
  "vendors"."companyName", 
  "users"."firstName",
  "users"."lastName";`;

  pool
    .query(queryText)
    .then((dbRes) => {
      console.log('SERVER - GET events at /api/event successful!');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - GET events at /api/event an error occurred', err);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/event/id
 */
router.get('/:id', (req, res) => {
  // Grabs an event by id
  const queryText = `
  SELECT 
  "events"."id",
  "events"."dateOfEvent", 
  "events"."timeOfEvent", 
  "events"."address", 
  "events"."city", 
  "events"."state", 
  "events"."zip",
  "events"."numberOfAttendees",
  "events"."description",
  "vendors"."companyName",
  "users"."firstName",
  "users"."lastName",
  JSON_AGG("events_photos".*) AS "eventsPhotos", 
  JSON_AGG("events_types".*) AS "eventsTypes", 
  JSON_AGG("events_vendors".*) AS "eventsVendors"
  FROM "events"
  LEFT OUTER JOIN "events_photos" ON "events"."id" = "events_photos"."eventId" 
  LEFT OUTER JOIN "events_types" ON "events"."id" = "events_types"."eventId" 
  LEFT OUTER JOIN "types_of_event" ON "events_types"."typeId" = "types_of_event"."id"
  LEFT OUTER JOIN "events_vendors" ON "events"."id" = "events_vendors"."eventId"
  LEFT OUTER JOIN "vendors" ON "events_vendors"."vendorUserId" = "vendors"."vendorUserId"
  LEFT OUTER JOIN "users" ON "users"."id" = "vendors"."vendorUserId"
  WHERE "events"."id" = $1
  GROUP BY 
  "events"."id",
  "events"."dateOfEvent", 
  "events"."timeOfEvent", 
  "events"."address", 
  "events"."city", 
  "events"."state", 
  "events"."zip",
  "events"."numberOfAttendees",
  "events"."description",
  "vendors"."companyName", 
  "users"."firstName",
  "users"."lastName";`;
  const eventId = req.params.id;

  pool
    .query(queryText, [eventId])
    .then((dbRes) => {
      console.log('SERVER - GET events at /api/event/id successful!');
      // send back an object rather than an array because return should be only one value
      res.send(dbRes.rows[0]);
    })
    .catch((err) => {
      console.error(
        'SERVER - GET events at /api/event/id an error occurred',
        err
      );
      res.sendStatus(500);
    });
});

/**
 * POST route for /api/event
 */
router.post('/', (req, res) => {
  const queryText = `
  INSERT INTO "events" 
  ("plannerUserId", 
  "dateOfEvent", 
  "timeOfEvent", 
  "address", 
  "city", 
  "state", 
  "zip", 
  "numberOfAttendees", 
  "description")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;

  pool.query(queryText);
});

module.exports = router;
