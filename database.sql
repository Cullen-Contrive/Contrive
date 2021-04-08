--THIS DB IS NAMED contrive_db AND WAS INITIALLY CREATED IN Postico USING PostgreSQL
--IF YOU WANT TO RESET THE DB/ADD COLUMNS TO A TABLE, SELECTIVELY DROP TABLES HERE:
DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "vendors" CASCADE;
DROP TABLE IF EXISTS "users_photos" CASCADE;
DROP TABLE IF EXISTS "messages" CASCADE;
DROP TABLE IF EXISTS "events" CASCADE;
DROP TABLE IF EXISTS "events_vendors" CASCADE;
DROP TABLE IF EXISTS "events_types" CASCADE;
DROP TABLE IF EXISTS "types_of_event" CASCADE;
DROP TABLE IF EXISTS "special_features" CASCADE;
DROP TABLE IF EXISTS "vendors_features" CASCADE;
--Stretch tables:
DROP TABLE IF EXISTS "events_photos" CASCADE;
DROP TABLE IF EXISTS "vendors_ratings" CASCADE;
DROP TABLE IF EXISTS "my_network" CASCADE;
DROP TABLE IF EXISTS "my_network_users" CASCADE;

--RUN ALL "CREATE TABLE" QUERIES TO CREATE DB
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (512) UNIQUE NOT NULL,
    "password" VARCHAR (256) NOT NULL,
    "firstName" VARCHAR(256),
    "lastName" VARCHAR(256),
    "addresss" VARCHAR(512),
    "city" VARCHAR(80),
    "state" VARCHAR(80),
    "zip" INT,
    "type" VARCHAR(80), --either admin, planner or vendor
    "website" VARCHAR(1024),
    "bio" VARCHAR(1024)
);

CREATE TABLE "users_photos" (
    "id" SERIAL PRIMARY KEY,
    "photo" VARCHAR (1024) NOT NULL
);

CREATE TABLE "special_features" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "special_features" ("name")
VALUES ('femaleOwned'), ('bipocOwned'), ('smallBusiness'), 
('caterer'), ('venueManager'), ('decorator'), ('partySupplier'), 
('entertainment');

CREATE TABLE "vendors" (
	"id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users",
	"description" VARCHAR (1200),
	"additionalInfo" VARCHAR(1024),
  "phone" VARCHAR(80),
  "certified" BOOLEAN DEFAULT false
	);

  CREATE TABLE "vendors_features" (
	"id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users",
  "featureId" INT REFERENCES "special_features"
	);

CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "plannerUserId" INT REFERENCES "users",
    "date" TIMESTAMPTZ,
    "address" VARCHAR(256),
    "city" VARCHAR(80),
    "state" VARCHAR(80),
    "zip" VARCHAR(80),
    "numberOfAttendees" INT,
    "description" VARCHAR(1024)
);

CREATE TABLE "types_of_event" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "types_of_event" ("name")
VALUES ('retirement'), ('birthday'), ('anniversary'), ('wedding'), ('funeral');

CREATE TABLE "events_types" (
    "id" SERIAL PRIMARY KEY,
    "eventId" INT REFERENCES "events",
    "type" INT REFERENCES "types_of_event"
);

CREATE TABLE "events_vendors" (
    "id" SERIAL PRIMARY KEY,
    "vendorUserId" INT REFERENCES "vendors",
    "eventId" INT REFERENCES "events"
);

CREATE TABLE "messages" (
    "id" SERIAL PRIMARY KEY,
    "fromUser" INT REFERENCES "users",
    "toUser" INT REFERENCES "users",
    "date" TIMESTAMPTZ,
    "message" VARCHAR(1024)
);


--Stretch Tables:
CREATE TABLE "vendors_ratings" (
    "id" SERIAL PRIMARY KEY,
);

CREATE TABLE "events_photos" (
    "id" SERIAL PRIMARY KEY,
);

CREATE TABLE "my_network" (
    "id" SERIAL PRIMARY KEY,
);

CREATE TABLE "my_network_users" (
    "id" SERIAL PRIMARY KEY,
);

