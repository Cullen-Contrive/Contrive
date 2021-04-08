--REGISTRATION Part I: insert into user table
--hash and salt password
INSERT INTO "users" ("username", "password", "first_name", "last_name", 
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
-- $2 is an array in {}.  ex VALUES:
(7, '{"caterer", "bipoc_owned", "small_business", "venue_manager"}', 
'A family-run business that...', 'business bio...', 'Some other things about the co',
'575 N West St.', '000-867-5309', false);

--VENDOR filter_type UPDATE example (when vendors add or remove special features to their business):
UPDATE "vendors"
SET "filter_type" = '{"caterer", "party_supplier", "bipoc_owned", "small_business", "venue_manager"}'
WHERE "id" = $1;


--FILTERING VENDORS based on selected filter_type(s) ex:
SELECT * FROM "vendors"
WHERE 'bipoc_owned' = ANY (filter_type) OR 'caterer' = ANY (filter_type);
