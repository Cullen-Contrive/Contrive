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
DROP TABLE IF EXISTS "service_types" CASCADE;
DROP TABLE IF EXISTS "vendors_services" CASCADE;
--Stretch tables:
DROP TABLE IF EXISTS "events_photos" CASCADE;
DROP TABLE IF EXISTS "vendors_ratings" CASCADE;
DROP TABLE IF EXISTS "my_network" CASCADE;
DROP TABLE IF EXISTS "my_network_users" CASCADE;

--RUN ALL "CREATE TABLE" QUERIES TO CREATE THE DB
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (512) UNIQUE NOT NULL,
  "password" VARCHAR (256) NOT NULL,
  "firstName" VARCHAR(256),
  "lastName" VARCHAR(256),
  "address" VARCHAR(512),
  "city" VARCHAR(80),
  "state" VARCHAR(80),
  "zip" INT,
  "type" VARCHAR(80), --either admin, planner or vendor
  "website" VARCHAR(1024),
  "bio" VARCHAR(1024)
);

CREATE TABLE "users_photos" (
  "id" SERIAL PRIMARY KEY,
  "userId" INT REFERENCES "users" ON DELETE CASCADE,
  "photo" VARCHAR (1024) NOT NULL
);

CREATE TABLE "vendors" (
	"id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users" ON DELETE CASCADE,
  "companyName" VARCHAR(256),
  "profilePic" VARCHAR(1024),
	"description" VARCHAR(1024),
	"additionalInfo" VARCHAR(1024),
  "phone" VARCHAR(80),
  "certified" BOOLEAN DEFAULT false
);

CREATE TABLE "special_features" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "special_features" ("name")
VALUES ('female-owned'), ('bipoc-owned'), ('small business');

CREATE TABLE "service_types" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "service_types" ("name")
VALUES ('caterer'), ('venue manager'), ('decorator'), ('party supplier'), 
('entertainment');


CREATE TABLE "vendors_features" (
	"id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users",
  "featureId" INT REFERENCES "special_features"
);

CREATE TABLE "vendors_services" (
	"id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users",
  "serviceId" INT REFERENCES "service_types"
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "plannerUserId" INT REFERENCES "users",
  "dateCreated" TIMESTAMPTZ DEFAULT current_timestamp,
  "dateOfEvent" DATE,
  "timeOfEvent" TIME,
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

CREATE TABLE "events_types" (
  "id" SERIAL PRIMARY KEY,
  "eventId" INT REFERENCES "events" ON DELETE CASCADE,
  "typeId" INT REFERENCES "types_of_event" ON DELETE CASCADE
);

INSERT INTO "types_of_event" ("name")
VALUES ('retirement'), ('birthday'), ('anniversary'), ('wedding'), 
('funeral'), ('reunion'), ('art'), ('causes'), ('drinks'), ('film'), ('graduation'), 
('fitness'), ('food'), ('games'), ('literature'), ('music'), ('networking'), 
('religion'), ('sports'), ('theater'), ('other');

CREATE TABLE "events_vendors" (
  "id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users" ON DELETE CASCADE,
  "eventId" INT REFERENCES "events" ON DELETE CASCADE
);

CREATE TABLE "messages" (
  "id" SERIAL PRIMARY KEY,
  "fromUser" INT REFERENCES "users",
  "toUser" INT REFERENCES "users",
  "date" TIMESTAMPTZ DEFAULT current_timestamp,
  "message" VARCHAR(1024)
);

--Stretch Tables:
CREATE TABLE "vendors_ratings" (
  "id" SERIAL PRIMARY KEY,
  "vendorUserId" INT REFERENCES "users",
  "userId" INT REFERENCES "users",
  "rating" INT,
  "comments" VARCHAR(1024)
);

CREATE TABLE "events_photos" (
  "id" SERIAL PRIMARY KEY,
  "eventId" INT REFERENCES "events",
  "photo" VARCHAR(1024)
);

CREATE TABLE "my_network" (
  "id" SERIAL PRIMARY KEY,
  "userId" INT REFERENCES "users"
);

CREATE TABLE "my_network_users" (
  "id" SERIAL PRIMARY KEY,
  "networkId" INT REFERENCES "my_network",
  "userId" INT REFERENCES "users"
);

