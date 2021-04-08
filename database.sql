
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



--- Create ENUM type + vendors' table
CREATE TYPE "filter_type" AS ENUM ('female_owned', 'bipoc_owned', 'small_business', 
'caterer', 'venue_manager', 'decorator', 'party_supplier', 'entertainment');

CREATE TABLE "vendors" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (256) NOT NULL,
	"description" VARCHAR (1200) NOT NULL,
	"filter_type" filter_type[]
	);