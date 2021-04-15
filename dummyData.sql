--USERS:
--Fill "users" table with fake users (all users' passwords will be 'one'):
INSERT INTO "users" ("username", "firstName", "lastName", "password", "profilePic",
"address", "city", "state", "zip", "type", "website", "bio")
VALUES ('Mac@gmail.com', 'McKynlee', 'Westman', '$2a$10$d.tw3AyrHON3AynvQDuoN.my8uxemJ7KZhzc7fcRMAHiuMpxIwh/u', 'https://karaspartyideas.com/wp-content/uploads/2016/11/Bike-Themed-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com28.jpeg', '4946 Walnut St', 'Kansas City', 'MO', 64112, 'planner', 'https://mckynlee.github.io/', 'Avid organizer of bike rallies - the non-motorized kind!'),
('SirBill@gmail.com', 'William', 'Krug', '$2a$10$mnm8InlV1d1tnUTAGywETO1w6u/p/2kD.iUN9kJ25Ww6cBxNaHjzi', 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/819485', '11 Knights Way', 'Minneapolis', 'MN', 55111, 'vendor', 'https://www.imdb.com/title/tt0183790/', 'Ready to help you plan your next Rennaissance affair down to the hilt of your sword!'),
('LilRusty@gmail.com', 'Dusty', 'Meyers', '$2a$10$nxWzD4fOt4n72TbnMlYXQO/yZknXnREW7s9DJY9IP0dIJG2PzsbiW', 'http://basementrejects.com/wp-content/uploads/2014/08/dungeons-dragons-2000-thora-birch-riding-dragon-savina-300x166.jpg', '77 DnD Blvd', 'Lawrence', 'KS', 66044, 'planner', 'https://www.imdb.com/title/tt0190374/', 'Looking to plan the wedding of my lifetime!'),
('JDog@gmail.com', 'John', 'Shands', '$2a$10$vSH/PXClWlf3vPlHKRLNXu5TRQPamdzbn921Q7tgtiDsK20SVTB2m', 'https://www.rawmusictv.com/images/og-share-image/best-swedish-rock-bands.jpg', '69 Woodstock Lane', 'Liberty', 'MO', 64068, 'vendor', 'https://www.libertymissouri.gov/1500/Liberty-Summer-Band', 'Able to provide a musical experience that your guests will never forget.'),
('RedRevolt@gmail.com', 'Jason', 'Lin', '$2a$10$coxFv5Ll23qca8Dp4LZ9T.UNlQTDQ32BM1FHXrKVqNwEJVmwWs8hG', 'https://www.alpineartscenter.org/images/stories/setup_pictures/birthday%20copy.jpg', '123 Four Ave', 'St. Cloud', 'MN', 56301, 'planner', 'https://memes.com/', 'Helping local artists plan gallery-openings throughout the Twin Cities.'),
('MushroomMan@gmail.com', 'Edan', 'Schwartz', '$2a$10$y1VJWv.1EEpl5cbpp8csguhA8OuXfou32w/wWTA.yrOzrmv6i2zMW', 'https://images.ctfassets.net/cnu0m8re1exe/4jaJ338Mbgu42tfIVnvWbp/e2c7e11773ff21b6d6f073fe8b87ece7/shutterstock_734992102.jpg?w=650&h=433&fit=fill', '1 Magic Mushy Rd', 'Minneapolis', 'MN', 55404, 'vendor', 'https://www.birdsandblooms.com/stuff-we-love/gardening-stuff/mushroom-growing-kits/', 'Mushroom-catering specialty; guaranteed to serve only the non-toxic kind.');




--USERS_PHOTOS:
--Fill users_photos with fake user's profile photos:
INSERT INTO "users_photos" ("userId", "photo")
VALUES (1, 'https://karaspartyideas.com/wp-content/uploads/2016/11/Bike-Themed-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com28.jpeg'), 
(2, 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/819485'), 
(3, 'http://basementrejects.com/wp-content/uploads/2014/08/dungeons-dragons-2000-thora-birch-riding-dragon-savina-300x166.jpg'), 
(4, 'https://www.rawmusictv.com/images/og-share-image/best-swedish-rock-bands.jpg'), 
(5, 'https://www.alpineartscenter.org/images/stories/setup_pictures/birthday%20copy.jpg'), 
(6, 'https://images.ctfassets.net/cnu0m8re1exe/4jaJ338Mbgu42tfIVnvWbp/e2c7e11773ff21b6d6f073fe8b87ece7/shutterstock_734992102.jpg?w=650&h=433&fit=fill');





--VENDORS:
--Fill vendors tables with fake users with type "vendor"
INSERT INTO "vendors" ("vendorUserId", "companyName", "description", "additionalInfo", "phone")
VALUES (2, 'Sir Knights Rentals', 'My company provides the realest Rennaissance experience you can get.', 'I am a small, family-run business.  You will be blown away by what good jesters my kids make!', '888-777-6666'),
(4, 'Rockin Johns', 'My Liberty Rockers will liven up your party no matter how small or large.', 'We are certified to play anywhere in the Kansas City metro.', '999-000-1234'),
(6, 'The Magical Mushroomer', 'I have been rated the Most-Luscious Mushroom Grower 5 years running.', 'I am approved by the FDA.', '567-890-4567');

--Fill vendors_features table with real special_features data for the fake vendors:
INSERT INTO "vendors_features" ("vendorUserId", "featureId")
VALUES (2, 3), (4, 3), (6, 1), (6, 3), (4, 3);

--Fill vendors_services table with real service_types data for the fake vendors:
INSERT INTO "vendors_services" ("vendorUserId", "serviceId")
VALUES (2, 5), (2, 2), (4, 5), (4, 2), (6, 1), (6, 3);





--MESSAGES
--Insert fake messages to start conversations:
INSERT INTO "messages" ("fromUser", "toUser", "message")
VALUES (1, 2, 'What is your rate for 100 people?'), 
(1, 4, 'Is your band able to play in Smithville?'), 
(3, 4, 'Are you available to play a wedding in August?'),
(5, 6, 'Are you licensed to serve your mushrooms in downtown Minneapolis?');

--Insert fake responses to fake messages separately so that the timestamp is different:
INSERT INTO "messages" ("fromUser", "toUser", "message")
VALUES (2, 1, 'I would like to discuss what activities you would like included- are you available to speak over the phone?'), 
(4, 3, 'What day in August?');





--EVENTS:
--Create fake events for the fake Planners
INSERT INTO "events" ("plannerUserId", "dateOfEvent", "timeOfEvent", "address", 
"city", "state", "zip", "numberOfAttendees", "description")
VALUES (1, '2021-04-30', '3:00', '5600 Walnut', 'Smithville', 'MO', 64089, 50, 'Graduation celebration!'),
(3, '2021-08-17', '12:00', '75 Chestnut', 'Lawrence', 'KS', 64048, 200, 'Small wedding with our closest friends and family.'),
(5, '2021-05-05', '5:55', '5 Main St.', 'Minneapolis', 'MN', 55111, 1000, 'Huge Cinco de Mayo art fair.');

--Pair fake events with types_of_events
INSERT INTO "events_types" ("eventId", "typeId")
VALUES (1, 5), (2, 1), (3, 7);

--Pair fake vendors with fake events
INSERT INTO "events_vendors" ("vendorUserId", "eventId")
VALUES (2, 1), (4, 2), (6,3);