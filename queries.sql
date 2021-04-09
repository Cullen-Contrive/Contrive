--REGISTRATION Part I: insert into user table
--hash and salt password before inserting into database
INSERT INTO "users" ("username", "password", "firstName", "lastName", 
"address", "city", "state", "zip", "type", "website", "bio")
VALUES($1, $1, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING "id"; -- this id will be $1 in Part II

--REGISTRATION  Part II: insert specific vendor info into vendors table
INSERT INTO "vendors" ("vendorUserId", "description", "additionalInfo", "phone")
VALUES ($1, $2, $3, $4); -- $1 is variable returned from Part I query





--ALL MESSAGES involving a specific user (this user could be either fromUser or toUser):
SELECT * FROM "messages"
WHERE "fromUser" = $1 OR "toUser" = $1
ORDER BY "date";

--MESSAGE DETAILS between two users (either could be fromUser, toUser, or both):
SELECT * FROM "messages"
WHERE ("fromUser" = $1 OR "toUser" = $1)
AND ("fromUser" = $2 OR "toUser" = $2)
ORDER BY "date";





--EVENT creation:
INSERT INTO "events" ("plannerUserId", "dateOfEvent", "address", 
"city", "state", "zip", "numberOfAttendees", "description")
VALUES ($1, $1, $3, $4, $5, $6, $7, $8);