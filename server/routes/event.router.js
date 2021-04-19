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
  // For creating events
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

  const plannerUserId = req.body.id;
  const dateOfEvent = req.body.dateOfEvent;
  const timeOfEvent = req.body.timeOfEvent;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const numberOfAttendees = req.body.numberOfAttendees;
  const description = req.body.description;

  pool
    .query(queryText, [
      plannerUserId,
      dateOfEvent,
      timeOfEvent,
      address,
      city,
      state,
      zip,
      numberOfAttendees,
      description,
    ])
    .then((dbRes) => {
      console.log('SERVER - POST - event creation successful!');
      console.table(dbRes.rows);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('SERVER - POST - an error occurred creating event', err);
      res.sendStatus(500);
    });
});

/**
 * POST route for /api/event/photos
 */
router.post('/photos', async (req, res) => {
  // For adding photos to events
  try {
    const queryText = `
    INSERT INTO 
    "events_photos" 
    ("photo", "eventId")
    VALUES ($1, $2);`;
    const eventId = req.body.eventId;

    await Promise.all(
      req.body.photos.map((photoURL) =>
        pool.query(queryText, [photoURL, eventId])
      )
    );
    console.log(
      'SERVER - POST - at /api/event/photos added photos successfully'
    );
    res.sendStatus(201);
  } catch (err) {
    await connection.query('ROLLBACK');
    res.sendStatus(500);
  }
});

module.exports = router;
