const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for /api/event
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // Grabs all events
  const queryText = `
  SELECT 
  "events"."id",
  to_char("events"."dateOfEvent", 'DD MON YYYY') AS "dateOfEvent",
  to_char("events"."timeOfEvent", 'HH:MM AM') AS "timeOfEvent",
  "events"."address", 
  "events"."city", 
  "events"."state", 
  "events"."zip",
  "events"."numberOfAttendees",
  "events"."description",
  "vendors"."companyName",
  "users"."firstName",
  "users"."lastName",
  JSON_AGG(DISTINCT "events_photos".*) AS "eventsPhotos", 
  JSON_AGG(DISTINCT "events_types".*) AS "eventsTypes", 
  JSON_AGG(DISTINCT "events_vendors".*) AS "eventsVendors"
  FROM "events"
  LEFT OUTER JOIN "events_photos" ON "events"."id" = "events_photos"."eventId" 
  LEFT OUTER JOIN "events_types" ON "events"."id" = "events_types"."eventId" 
  LEFT OUTER JOIN "types_of_event" ON "events_types"."typeId" = "types_of_event"."id"
  LEFT OUTER JOIN "events_vendors" ON "events"."id" = "events_vendors"."eventId"
  LEFT OUTER JOIN "vendors" ON "events_vendors"."vendorUserId" = "vendors"."vendorUserId"
  LEFT OUTER JOIN "users" ON "events"."plannerUserId" = "users"."id"
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
      console.error(
        'SERVER - GET events at /api/event an error occurred!',
        err
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/event/id
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // Grabs an event by id
  const queryText = `
  SELECT 
  "events"."id",
  to_char("events"."dateOfEvent", 'DD MON YYYY') AS "dateOfEvent",
  to_char("events"."timeOfEvent", 'HH:MM AM') AS "timeOfEvent",
  "events"."address", 
  "events"."city", 
  "events"."state", 
  "events"."zip",
  "events"."numberOfAttendees",
  "events"."description",
  "vendors"."companyName",
  "users"."firstName",
  "users"."lastName",
  JSON_AGG(DISTINCT "events_photos".*) AS "eventsPhotos", 
  JSON_AGG(DISTINCT "events_types".*) AS "eventsTypes", 
  JSON_AGG(DISTINCT "events_vendors".*) AS "eventsVendors"
  FROM "events"
  LEFT OUTER JOIN "events_photos" ON "events"."id" = "events_photos"."eventId" 
  LEFT OUTER JOIN "events_types" ON "events"."id" = "events_types"."eventId" 
  LEFT OUTER JOIN "types_of_event" ON "events_types"."typeId" = "types_of_event"."id"
  LEFT OUTER JOIN "events_vendors" ON "events"."id" = "events_vendors"."eventId"
  LEFT OUTER JOIN "vendors" ON "events_vendors"."vendorUserId" = "vendors"."vendorUserId"
  LEFT OUTER JOIN "users" ON "events"."plannerUserId" = "users"."id"
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
        'SERVER - GET events at /api/event/id an error occurred!',
        err
      );
      res.sendStatus(500);
    });
});

/**
 * POST route for /api/event
 */
router.post('/', rejectUnauthenticated, (req, res) => {
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
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING "id";`;

  const plannerUserId = req.user.id;
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
      console.error('SERVER - POST - an error occurred creating event!', err);
      res.sendStatus(500);
    });
});

/**
 * POST route for /api/event/photos
 */
router.post('/photos', rejectUnauthenticated, async (req, res) => {
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
      'SERVER - POST - at /api/event/photos added photos successfully!'
    );
    res.sendStatus(201);
  } catch (err) {
    await connection.query('ROLLBACK');
    res.sendStatus(500);
  }
});

/**
 * POST route for /api/event/vendors
 */
router.post('/vendors', rejectUnauthenticated, async (req, res) => {
  // For adding vendors to events
  try {
    const queryText = `
    INSERT INTO 
    "events_vendors" 
    ("vendorUserId", "eventId")
    VALUES ($1, $2);`;
    const eventId = req.body.eventId;

    await Promise.all(
      req.body.vendors.map((vendorId) =>
        pool.query(queryText, [vendorId, eventId])
      )
    );
    console.log(
      'SERVER - POST - at /api/event/vendors added vendors successfully!'
    );
    res.sendStatus(201);
  } catch (err) {
    await connection.query('ROLLBACK');
    res.sendStatus(500);
  }
});

/**
 * POST route for /api/event/types
 */
router.post('/types', rejectUnauthenticated, (req, res) => {
  // For adding types to events
  const queryText = `
  INSERT INTO 
  "events_types" 
  ("eventId", "typeId")
  VALUES (3, 2);`;
  const eventId = req.body.eventId;
  const typeId = req.body.typeId;
  pool
    .query(queryText, [eventId, typeId])
    .then((dbRes) => {
      console.log(
        'SERVER - POST - at /api/event/types added an event type successfully!'
      );
      console.table(dbRes.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(
        'SERVER - POST at /api/event/types adding an event type an error occurred',
        err
      );
      res.sendStatus(500);
    });
});

/**
 * DELETE route for /api/event/types
 */
router.delete('/types', rejectUnauthenticated, (req, res) => {
  // For deleting types from events
  const queryText = `
  DELETE 
  FROM "events_types"
  WHERE "eventId" = $1;`;
  const eventId = req.body.eventId;

  pool
    .query(queryText, [eventId])
    .then((dbRes) => {
      console.log(
        'SERVER - DELETE - at /api/event/types deleted an event type successfully!'
      );
      console.table(dbRes.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(
        'SERVER - DELETE at /api/event/types deleting an event type an error occurred',
        err
      );
      res.sendStatus(500);
    });
});

/**
 * DELETE route for /api/event/vendors
 */
router.delete('/vendors', rejectUnauthenticated, (req, res) => {
  // For deleting vendors from events
  const queryText = `
  DELETE 
  FROM "events_vendors" 
  WHERE "vendorUserId" = $1 AND "eventId" = $2;`;
  const vendorUserId = req.body.vendorUserId;
  const eventId = req.body.eventId;

  pool
    .query(queryText, [vendorUserId, eventId])
    .then((dbRes) => {
      console.log(
        'SERVER - DELETE - at /api/event/vendors deleted a vendor successfully!'
      );
      console.table(dbRes.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(
        'SERVER - DELETE at /api/event/vendors deleted a vendor an error occurred',
        err
      );
      res.sendStatus(500);
    });
});

/**
 * PUT route for /api/event/id
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // For updating event by id
  const queryText = `
  UPDATE "events" 
  SET 
  "plannerUserId" = $1,
  "address" = $2, 
  "city" = $3, 
  "state" = $4, 
  "zip" = $5,
  "numberOfAttendees" = $6,
  "description" = $7 
  "dateOfEvent" = $8
  "timeOfEvent" = $9
  WHERE "id" = $10;`;

  const plannerUserId = req.body.plannerUserId;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const numberOfAttendees = req.body.numberOfAttendees;
  const description = req.body.description;
  const dateOfEvent = req.body.dateOfEvent;
  const timeOfEvent = req.body.timeOfEvent;
  const eventId = req.params.id;

  pool
    .query(queryText, [
      plannerUserId,
      address,
      city,
      state,
      zip,
      numberOfAttendees,
      description,
      dateOfEvent,
      timeOfEvent,
      eventId,
    ])
    .then((dbRes) => {
      console.log('SERVER - PUT updating event by id successful!');
      console.table(dbRes.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('SERVER - PUT updating event by id an error occurred', err);
      res.sendStatus(500);
    });
});

module.exports = router;
