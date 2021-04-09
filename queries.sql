--REGISTRATION Part I: insert into user table
--hash and salt password before inserting into database
INSERT INTO "users" ("username", "password", "firstName", "lastName", 
"address", "state", "zip", "type", "admin", "profile_pic", "website")
VALUES($1, $1, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING "id"; -- this id will be $1 in Part IIa and IIb

--REGISTRATION  Part IIa: insert into planners table
INSERT INTO "planners" ("user_id", "bio")
VALUES ($1, $1, $3);  -- $1 returned from Part I query


--REGISTRATION  Part IIb: insert into vendors table
INSERT INTO "vendors" ("user_id", "filter_type", "description", "bio", 
"additional_info", "address", "phone", "certified")
VALUES ($1, $2, $3, $4, $5, $6, $7, $8); -- $1 returned from Part I query



--FILTERING VENDORS based on selected filter_type(s) ex:
SELECT * FROM "vendors"

