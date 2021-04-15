--USERS:
--Fill "users" table with fake users (all users' passwords will be 'one'):
INSERT INTO "users"
("username", "password", "firstName", "lastName", "address", "city", "state", "zip", "type", "website", "bio")
VALUES
('Mac@gmail.com', '$2a$10$d.tw3AyrHON3AynvQDuoN.my8uxemJ7KZhzc7fcRMAHiuMpxIwh/u', 'McKynlee', 'Westman', '4946 Walnut St', 'Kansas City', 'MO', 64112, 'planner', 'https://mckynlee.github.io/', 'Avid organizer of bike rallies - the non-motorized kind!'),
('SirBill@gmail.com', '$2a$10$mnm8InlV1d1tnUTAGywETO1w6u/p/2kD.iUN9kJ25Ww6cBxNaHjzi', 'William', 'Krug', '11 Knights Way', 'Minneapolis', 'MN', 55111, 'vendor', 'https://www.imdb.com/title/tt0183790/', 'Ready to help you plan your next Rennaissance affair down to the hilt of your sword!'),
('LilRusty@gmail.com', '$2a$10$nxWzD4fOt4n72TbnMlYXQO/yZknXnREW7s9DJY9IP0dIJG2PzsbiW', 'Dusty', 'Meyers', '77 DnD Blvd', 'Lawrence', 'KS', 66044, 'planner', 'https://www.imdb.com/title/tt0190374/', 'Looking to plan the wedding of my lifetime!'),
('JDog@gmail.com', '$2a$10$vSH/PXClWlf3vPlHKRLNXu5TRQPamdzbn921Q7tgtiDsK20SVTB2m', 'John', 'Shands', '69 Woodstock Lane', 'Liberty', 'MO', 64068, 'vendor', 'https://www.libertymissouri.gov/1500/Liberty-Summer-Band', 'Able to provide a musical experience that your guests will never forget.'),
('RedRebel@gmail.com', '$2a$10$coxFv5Ll23qca8Dp4LZ9T.UNlQTDQ32BM1FHXrKVqNwEJVmwWs8hG', 'Jason', 'Lin', '123 Four Ave', 'St. Cloud', 'MN', 56301, 'planner', 'https://memes.com/', 'Helping local artists plan gallery-openings throughout the Twin Cities.'),
('MushroomMan@gmail.com', '$2a$10$y1VJWv.1EEpl5cbpp8csguhA8OuXfou32w/wWTA.yrOzrmv6i2zMW', 'Edan', 'Schwartz', '1 Magic Mushy Rd', 'Minneapolis', 'MN', 55404, 'vendor', 'https://www.birdsandblooms.com/stuff-we-love/gardening-stuff/mushroom-growing-kits/', 'Mushroom-catering specialty; guaranteed to serve only the non-toxic kind.')
('info@Mintahoe.com', 'one', 'Jackie', 'Chan', '2850 Anthony Lane South', 'Minneapolis', 'MN', 55418, 'vendor', 'https://www.mintahoe.com/', 'When you choose Mintahoe Catering &  Events, you choose pease of mind.  Our event experts will help you design the perfect menu with your vision and budget. Envision the Wow.'),
('info@Chowgirls.com', 'one', 'Annie', 'Oakley', '336 Hoover St NE', 'Minneapolis', 'MN', 55413, 'vendor', 'https://www.chowgirls.net/', 'Whether you are celebrating a grad, a dad, or just have plans for simple al fresco dining this spring and summer, we have got delicious ways to celebrate safely.'),
('info@nafnaf.com', 'one', 'Amir', 'Abdul', '3340 Central Park Village Drive, Suite 100', 'Egan', 'MN', 55121, 'vendor', 'https://www.nafnafgrill.com/', 'We promise to be your guide to exploring the best flavors of the Middle East each time we make our handmade dishes, like pillowy pita, crispy falafel, savory shawarma, and our scratch-made signature sauces.'),
('dine@CRAVE.com', 'one', 'Domingo', 'Chavez', '2100 Summer St NE', 'Minneapolis', 'MN', 55413, 'vendor', 'http://cravecatering.com/', 'Inspired by our passion for quality food and our love of helping guests create one of a kind memories, CRAVE Catering is a full service Minneapolis catering company dedicated to making your event unforgettable!'),
('info@deco.com', 'one', 'Hans', 'Gruber', '2010 E Hennepin Ave Ste 7', 'Minneapolis', 'MN', 55413, 'vendor', 'http://www.decocatering.com', 'Located in Minneapolis, The Deco Catering is a premier Minnesota caterer, founded by Soile Anderson in 1982. The Deco Catering offers award winning authentic European catering rich with flavor, artistic flair, and design.'),
('info@commonroots.com', 'one', 'Bonnie', 'Patterson', '2558 Lyndale Ave S', 'Minneapolis', 'MN', 55405, 'vendor', 'https://www.commonrootscatering.com/', 'We are a full-service Minneapolis / St. Paul caterer providing our clients with good food made from scratch and exceptional service.  We will make your event memorable with our modern take on classic American cuisine using local and organic ingredients.'),
('events@walkerart.com', 'one', 'Luke', 'Wagner', '725 Vineland Pl', 'Minneapolis', 'MN', 55403, 'vendor', 'https://walkerart.org/events-catering/', 'The Walker Art Center, one of the most celebrated art museums in the country, is known for its innovative presentations and acclaimed collections across the spectrum of the visual, performing, and media arts, housed within an award-winning civic landmark. Amid beautiful galleries, the Walker also offers unique spaces for indoor and outdoor private rentals for artful celebrations, refined receptions, unforgettable weddings, and state-of-the-art corporate events. The iconic building features flexible spaces with high-tech amenities for nearly any size gathering—including a theater, street-level and roof-top terraces, plazas, gardens, and lounges.'),
('info@five.com', 'one', 'Amber', 'Ebert', '2917 Bryant Avenue South', 'Minneapolis', 'MN', 55408, 'vendor', 'https://www.fiveeventcenter.com/', 'The historic building boasts a full upstairs remodel while retaining nods to the original elements: wood floors and exposed brick call to times past, while New York contemporary lighting and artwork inject the space with unique personality. The renovated space showcases up to the minute technology – including an HD projector and large 110-inch retractable screen, customizable Gobo lighted image projector (perfect for your new wedding monogram), complete sound system compatible with all Apple devices, and high-speed wireless internet, which will make social media posting a breeze for your guests!'),
('karen@aria.com', 'one', 'Karen', 'Ashley', '105 North 1st Street', 'Minneapolis', 'MN', 55401, 'vendor', 'http://www.ariampls.com/', 'As a former theater our open and flexible floor plan, soaring 30-foot ceilings, amazing acoustics, and plentiful rigging points for décor and lighting, ensure that logistics are never in the way of bringing your event dreams to life.'),
('info@lumberexchangeevents.com', 'one', 'Jeremy', 'Ryan', '10 South 5th St Suite 111', 'Minneapolis', 'MN', 55402, 'vendor', 'website', 'We are Downtown Minneapolis’ most versatile venue, located at the intersection of Hennepin Avenue and South 5th Street in the dazzling Lumber Exchange Building.'),
('infor@abluea.com', 'one', 'Blake', 'Reacher', '255 6th Street E Sixth Floor', 'Saint Paul', 'MN', 55101, 'vendor', 'https://www.abulae.com/', 'Instead of designing the event around the building, we designed the building around the event.'),
('info@Midpointe.com', 'one', 'Shayla', 'Johnson', '415 Pascal Street North', 'St. Paul', 'MN', 55104, 'vendor', 'https://midpointeeventcenter.com/', 'Our mission is to provide an elegant facility, excellent staff, and superior service to our wonderful and diverse community. We believe that every guest is important and we help them create memories to last a lifetime'),
('AmyZaroff@gmail.com', 'one', 'Amy', 'Zaroff', '11267 Overlook Drive', 'Minnetonka', 'MN', 55305, 'vendor', 'https://www.amyzaroff.com/', 'We are a boutique, multi-channel, creative agency that has produced over 1,500 events across the United States and Canada. We are smart, fun loving and creative people brought together by a shared passion for attention to detail and bringing joy to those who attend our activations and events.'),
('info@yandievents.com', 'one', 'Ichabod', 'Yentis', '920 E Lake St # 136 N', 'Minneapolis', 'MN', 55407, 'vendor', 'https://www.yievents.com/', `We are committed to helping you create your special event just the way you imagined it and more! We listen to your needs, desires, and create custom designs with our in-house event decoration rentals and design services. We work with you to make the day you've dreamed of even more special.`),
('janet@blaisdell.com', 'one', 'Janet', 'Mosley', '2322 Blaisdell Avenue', 'Minneapolis', 'MN', 55404, 'vendor', 'https://www.theblaisdell.com/', 'A newly renovated event venue in the heart of Minneapolis combining elegant style with a modern sensibility, offering a unique space for weddings, corporate events & more.'),
('Blush@gmail.com', 'one', 'Colleen', 'Nava', '', 'Inver Grove Heights', 'MN', 55076, 'vendor', 'website', 'Simply put, I absolutely love all things design! Each project is an exciting challenge for me as I translate ideas and visions into real life. The special events we celebrate are often important milestones in our lives and deserve to be remembered in a beautiful way… and unique, artful statement decor will do just that for you and your guests! A stunning photo backdrop, welcome wall, or perhaps a lovely balloon piece will set the tone for these momentous occasions. '),
('AmazingScott@live.com', 'one', 'Scott', '', '', 'Minneapolis', 'MN', 55409, 'vendor', 'http://www.amazingscott.com/', 'The Amazing Scott features international award-winning balloon Artist and Certified Balloon Artist (CBA), Scott Nichols CBA. With Beautiful balloon sculptures, Outstanding balloon decor, and Amazing balloon Entertainment, we offer unique upgrades to any party or event to make it "Magical" for an unforgettable experience.'),
('leslie@decorforweddings.com', 'one', 'Leslie', 'Goodman', '100 West Franklin Avenue Suite 202', 'Minneapolis', 'MN', 55404, 'vendor', 'http://www.decorforweddings.com/', 'Distinctive decor, floral & styling for weddings & events in Minneapolis, St. Paul & the Twin Cities Metro Area of Minnesota.'),
('aandjparty@aol.com', 'one', 'James', 'Anderson', '', 'Bloomington', 'MN', 55431, 'vendor', 'http://www.ajpartyrental.com/', 'We bring all of your rental needs to you! No matter your location whether it be Minneapolis, Edina, Lakeville, Bloomington, Farmington Apple Valley or any surrounding Twin Cities area, we charge a reasonable fee to ensure you have what you need for your event. Tables, Chairs, Canopies, and much more- We have what you need to make your party the best it can be!'),
('partyrentals@broadwayparty.com', 'one', 'Jonas', 'Smith', '8101 Ashton Ave NE', 'Fridley', 'MN', 55432, 'vendor', 'https://broadwaypartyrental.com/', 'Broadway is a Local Family Owned business & since 1956 we’ve dedicated ourselves to providing quality rental equipment to our community! We’re 2nd Generation owned & operated! Learn more about buying local.'),
('info@minnesota-ice.com', 'one', 'Willard', 'Smith', '755 Prior Ave. Suite 237', 'St. Paul', 'MN', 55104, 'vendor', 'https://www.minnesota-ice.com/', 'MINNESOTA ICE IS THE LEADING PRODUCER OF PACKAGED ICE, PURE & CLEAR COCKTAIL ICE, KOLD DRAFT ICE CUBES, CRUSHED ICE, SHAVED ICE BLOCKS, SCULPTURE ICE BLOCKS, AND ICE SCULPTURES'),
('tammy@occasionslinen.com', 'one', 'Tammy', 'Danger', '551 Dorland Rd', 'Maplewood', 'MN', 55119, 'vendor', 'https://www.occasionslinen.com/', 'Whether it’s an intimate gathering or larger gala your event will be remembered for a lifetime. Specialty linens are key to a spectacular table setting and to creating your desired atmosphere. Just remember that your event will be photographed over and over…so you really want to make a lasting impression! Occasions Linen Rental services the Twin Cities and surrounding communities. If there is something that you don’t see on the website let us know we can order it! Together we can create your occasion to remember.'),
('events@festivitiesmn.com', 'one', 'Julio', 'Varga', '10701 Red Circle Drive', 'Minnetonka', 'MN', 55343, 'vendor', 'https://www.festivitiesmn.com/', 'Festivities has the functional, fun & fashionable stuff your event needs, with the design, service & expertise you want.'),
('info@apresparty.com', 'one', 'Lindsey', 'Logan', '5801 Clearwater Drive', 'Minnetona', 'MN', 55343, 'vendor', 'http://www.apresparty.com/', 'bI started Après 33 years ago out of the lower level of my home. Purchasing a full line of rental inventory and opening at my first location in time for the hectic Christmas season of 1987. We are now working out of more than 63,000 square feet.io'),
('fun@atouchofmagicentertainment.com', 'one', 'Megan', 'Grahm', '', 'St. Paul', 'MN', 55113, 'vendor', 'https://atouchofmagicentertainment.com/', 'We are a family owned and operated full-service entertainment company run by professional entertainers.  Founded in 1986, A Touch of Magic, Inc. is located in St. Paul, Minnesota, the Twin Cities, with entertainers/artists who are nationally renowned in addition to being local favorites. What started as a small project to fund a college education,  has grown into a lifelong passion and desire to bring joy & laughter to our clients!  Maybe that’s why we’ve been named “Best Entertainment” in the Twin Cities over and over again.'),
('karaoketwincities@gmail.com', 'one', 'Oko', 'Ono', '', 'Minneapolis', 'MN', 55406, 'vendor', 'wehttp://karaoketwincities.com/bsite', 'We provide hosted karaoke entertainment to local bars/restaurants as well as the opportunity to rent our equipment with or without a host to suit your entertainment needs.'),
('info@northernsoundentertainment.com', 'one', 'Dustin', 'Jaeger', '16102 Hawthorn Path', 'Lakeville', 'MN', 55044, 'vendor', 'https://www.northernsoundentertainment.com/', 'The owners of Northern Sound Entertainment have a serious passion for the event service industry. They started this company in 2016 with a vision to shake up the Wedding and Event Services industry.'),
('info@wedphoria.com', 'one', 'Michael', 'Wells', '', 'Clear Lake', 'MN', 55319, 'vendor', 'https://www.minnesotaprodj.com/', 'WedPhoria, formerly known as Minnesota Pro DJ, offers HIGH quality wedding and special event DJ, Photo Booth, Photography, Officiant and Event Planning services.'),
('info@adagiodj.com', 'one', 'Roger', 'Moore', '413 Wacouta Street Suite 100', 'Saint Paul', 'MN', 55101, 'vendor', 'https://www.adagiodj.com/', 'When the lights go up and the party’s over, all you’ll have left are the memories. At Adagio Djay Entertainment, we specialize in crafting a symphony of music, melodies and excitement into the perfect experience for the most memorable day of your life. From the first dance to the last—we never forget whose day it is.'),
('info@midwestsound.com', 'one', 'Charles', 'Jordan', '1900 Oakcrest Ave STE 6', 'Roseville', 'MN', 55113, 'vendor', 'https://www.midwestsound.com/', 'We created the blueprint for wedding DJ entertainment. We continue to set trends and facilitate remarkable receptions. Our unparalleled training and mentorship program makes our DJs exceptional. We perform at 1,900 receptions every year and each is customized to be one of a kind. Our comprehensive online planning process lets our clients have complete control to guarantee a unique and memorable wedding. With our experience and reliability, we will continue to provide amazing wedding DJ entertainment for many years to come.'),
('info@brancatoscatering.com', 'one', 'Brandon', 'Castillo', '5050 Kansas Ave', 'Kansas City', 'KS', 66106, 'vendor', 'https://brancatoscatering.com/', 'Whether you’re planning an outdoor event or working with one of Kansas City’s hottest venues, our expert coordinators will offer you the latest in food trends and make your event one to remember. We work closely with Kansas City’s top event venues to help provide you with the best service possible for your big day. If you haven’t selected your venue yet we can help guide you in finding the perfect fit for your big day. Our coordinators will work with you from planning to execution, providing you with expert guidance leading up to your event and throughout your big day making sure your expectations are exceeded.'),
('moxiecatering@gmail.com', 'one', '', '', '1617 Genessee St', 'Kansas City', 'MO', 64102, 'vendor', 'http://www.moxiecatering.com/', ''),
('chef@thebluepot.com', 'one', 'Kelly', 'Bundy', '8133 Wornall Road', 'Kansas City', 'MO', 64114, 'vendor', 'https://thebluepot.com/', 'Kansas City’s premier catering and event designer for weddings, corporate and social events, since 2006. Delight your guests with seasonal, made-from-scratch menu items inspired by the best ingredients.'),
('info@grandmas.com', 'one', 'Vivan', 'Heart', '2800 Guinotte Ave', 'Kansas City', 'MO', 64120, 'vendor', 'https://grandmascatering.com/', ''),
('info@twositers.com', 'one', 'Michele', 'Fisher', '5701 Logan Rd', 'Kansas City', 'MO', 64136, 'vendor', 'http://www.twosisterscateringkc.com/', `From a business lunch to your elaborate social event of the year, Two Sisters Catering’s homemade touch and elegance goes into everything we make. Our delicious recipes and eye-appealing dishes have been a Kansas City favorite for more than 10 years.`),
('eacatering@gmail.com', 'one', 'Lars', 'Hettfield', '8011 Wornall Road', 'Kansas City', 'MO', 64114, 'vendor', 'http://www.eacatering.com/', `EA Catering & Sons is chef-owned and operated in Kansas City, MO. Since opening in 2006, we’ve treated every customer like they were a part of our family. We are a full service caterer. We create a custom from scratch menu just for you. We can also take care of all your event planning needs. . Chef Argie is a graduate  of the Culinary Institute of America in Hyde Park, New York. He is well reviewed and has 30 years experience in the industry. Free event venue with minimum order! We never cut corners, we use the best natural ingredients we can find, we make everything from scratch. We never use processed or any pre-made foods you will love the difference. Eat Good Live Well!`),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', '', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio'),

('usesrname', 'one', 'firstName', 'lastName', 'address', 'city', 'MN', zip, 'vendor', 'website', 'bio');


--USERS_PHOTOS:
--Fill users_photos with fake user's profile photos:
INSERT INTO "users_photos"
("userId", "photo")
VALUES
(1, 'https://karaspartyideas.com/wp-content/uploads/2016/11/Bike-Themed-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com28.jpeg'), 
(2, 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/819485'), 
(3, 'http://basementrejects.com/wp-content/uploads/2014/08/dungeons-dragons-2000-thora-birch-riding-dragon-savina-300x166.jpg'), 
(4, 'https://www.rawmusictv.com/images/og-share-image/best-swedish-rock-bands.jpg'), 
(5, 'https://www.alpineartscenter.org/images/stories/setup_pictures/birthday%20copy.jpg'), 
(6, 'https://images.ctfassets.net/cnu0m8re1exe/4jaJ338Mbgu42tfIVnvWbp/e2c7e11773ff21b6d6f073fe8b87ece7/shutterstock_734992102.jpg?w=650&h=433&fit=fill');


--VENDORS:
--Fill vendors tables with fake users with type "vendor"
INSERT INTO "vendors"
("vendorUserId", "companyName", "profilePic", "description", "additionalInfo", "phone")
VALUES
(2, 'Sir Knights Rentals', 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/819485', 'My company provides the realest Rennaissance experience you can get.', 'I am a small, family-run business.  You will be blown away by what good jesters my kids make!', '888-777-6666'),
(4, 'Rockin Johns', 'https://www.rawmusictv.com/images/og-share-image/best-swedish-rock-bands.jpg', 'My Liberty Rockers will liven up your party no matter how small or large.', 'We are certified to play anywhere in the Kansas City metro.', '999-000-1234'),
(6, 'The Magical Mushroomer', 'https://images.ctfassets.net/cnu0m8re1exe/4jaJ338Mbgu42tfIVnvWbp/e2c7e11773ff21b6d6f073fe8b87ece7/shutterstock_734992102.jpg?w=650&h=433&fit=fill', 'I have been rated the Most-Luscious Mushroom Grower 5 years running.', 'I am approved by the FDA.', '567-890-4567'),
(7, 'Mintahoe', 'https://www.mintahoe.com/wp-content/uploads/2017/04/MCE_Logo_White-e1492627487357.png', 'When you choose Mintahoe Catering &  Events, you choose pease of mind.  Our event experts will help you design the perfect menu with your vision and budget. Envision the Wow', 'We prioritize local products when available and cost-efficient to our clients.', '612-253-0255'),
(8, 'Chowgirls', 'https://www.chowgirls.net/_interface/structure/chowgirls_large.png', 'Chowgirls creates beautiful, handcrafted fare using fresh, seasonal ingredients.', 'Strong relationships with local farmers and vendors allow our chefs to craft menus reflecting the tasts of each season and our commitment to sustainability.', '612-203-0786'),
(9, 'Naf Naf Middle Eastern Grill', 'https://2utgaa2m4mzswgysf34qlzz1-wpengine.netdna-ssl.com/wp-content/uploads/logo.svg', 'We promise to be your guide to exploring the best flavors of the Middle East each time we make our handmade dishes, like pillowy pita, crispy falafel, savory shawarma, and our scratch-made signature sauces.', 'Middle Eastern cuisine done right.', '651-347-1119'),
(10, 'CRAVE Catering & Events', 'http://cravecatering.com/wp-content/uploads/2017/02/CRAVE_CateringEvents_Logo_1_26_17_Black_RedV.png', 'Inspired by our passion for quality food and our love of helping guests create one of a kind memories, CRAVE Catering is a full service Minneapolis catering company dedicated to making your event unforgettable!', 'We offer Kosher meals', '952-562-5620'),
(11, 'The Deco Catering', 'https://www.decocatering.com/wp-content/uploads/2015/11/deco_catering_logo.png', 'Located in Minneapolis, The Deco Catering is a premier Minnesota caterer, founded by Soile Anderson in 1982. The Deco Catering offers award winning authentic European catering rich with flavor, artistic flair, and design. With over 30 years of catering experience, The Deco Catering is a Twin Cities premier wedding caterer, corporate event caterer, and is proud to be one of a select few in Minnesota to carry a Kosher Food license.', 'Kosher Food license', '612-623-4477'),
(12, 'Common Roots Catering', 'https://static1.squarespace.com/static/51018139e4b0d171103d3396/t/598b4efddb29d6084ce80dab/1609430941993/?format=1500w', 'We are a full-service Minneapolis / St. Paul caterer providing our clients with good food made from scratch and exceptional service.  We will make your event memorable with our modern take on classic American cuisine using local and organic ingredients. ', 'Local and sustainable food. Operating in an environmentaly responsible way. Values driven business.', '612-871-2360'),
(13, 'Walker On Site', '', 'The Walker Art Center, one of the most celebrated art museums in the country, is known for its innovative presentations and acclaimed collections across the spectrum of the visual, performing, and media arts, housed within an award-winning civic landmark. Amid beautiful galleries, the Walker also offers unique spaces for indoor and outdoor private rentals for artful celebrations, refined receptions, unforgettable weddings, and state-of-the-art corporate events. The iconic building features flexible spaces with high-tech amenities for nearly any size gathering—including a theater, street-level and roof-top terraces, plazas, gardens, and lounges.', 'Hosting your event at the Walker also provides features you won’t find anywhere else: free gallery admission, a private exhibition tour for your guests, a mini-golf outing for an afternoon away from the office, or a cocktail reception with a private screening of the British Arrow Awards to spice up your annual holiday party.', '612-253-3408'),
(14, 'FIVE Event Center', 'https://www.fiveeventcenter.com/wp-content/uploads/2015/12/five_logo_gradient-copy.png', 'You spent valuable time finding the love of your life, so don’t compromise when it comes to celebrating your wedding day! FIVE Event Center is the elegant and romantic space you and your partner had always dreamed. Your personal Event Manager will walk you through every step of the way and can help tailor our space and services to fit your taste, needs,  and budget. When the date arrives, your Event Manager will be working around the clock to make sure that your celebration runs smoothly, helping create memories to last you a lifetime.', 'Our convenient Uptown location allows plenty of ease for travelers and guests being near ample on-site parking, bars, eateries, and hotels, as well as making our location suitable for special photo opportunities near infamous Minneapolis landmarks like Lake Calhoun, and the Uptown Theatre. From small affairs to large parties, FIVE Event Center can accommodate festivities that can span the entire building, offering a cozy outdoor patio perfect for breaks from the dance floor, toasts to the happy couple in our lower level cocktail room, or elevator rides back to the second floor for memorable dinner conversations.', '612-827-5555'),
(15, 'ARIA', 'http://static1.squarespace.com/static/593dc4ac5016e1368cc779ab/t/5f356f623d689a54ab9534fa/1615984167809/?format=1500w', 'As a former theater our open and flexible floor plan, soaring 30-foot ceilings, amazing acoustics, and plentiful rigging points for décor and lighting, ensure that logistics are never in the way of bringing your event dreams to life.', 'Apart from food & beverage, you are welcome to choose any vendor, though we do have our favorites!', '612-342-2742'),
(16, 'Lumber Exchange Event Center', 'https://lxmpls.com/wp-content/uploads/2019/05/LXMPLS-side-white-44.png', 'The story of the Lumber Exchange Event Center all started with a simple idea. Host larger more elegant events and do it in a way that would change the way Minneapolis looked at event space.', 'We are Downtown Minneapolis’ most versatile venue, located at the intersection of Hennepin Avenue and South 5th Street in the dazzling Lumber Exchange Building.', '612-843-2575'),
(17, `A'BULAE`, 'https://www.abulae.com/mt-content/uploads/2016/05/ab-horizontal-web-white.png', `A’BULAE is Minnesota’s first fully integrated reception venue that brings together people, events, and state-of-the-art technology. In a beautiful loft-style space overlooking downtown St. Paul, our integrated light, sound, and digital capabilities will offer you endless opportunities to personalize the space.`, 'Full-service catering kitchen on-site.', '651-788-9818'),
(18, 'Midpointe Event Center', 'https://static1.squarespace.com/static/5761bf14b3db2bca65bc21d0/t/5ab9540a2b6a28f2b9fbec70/1599146836852/?format=1500w', `We've designed Midpointe Event Center with diverse and dynamic events in mind. Not only do we include many amenities and services in the price of your event hall rental, but our space can be customized to make your event a one-of-a-kind experience.`, 'Ability to use any outside licensed caterer of your choice.  Ability to host your own bar.', '651-641-7544'),
(19, 'AmyZaroff Events + Design', 'https://static1.squarespace.com/static/5e593fb04aabfd3b920e8a9b/t/5e594ab74f9ff3249dd1c0fe/1604376932856/?format=1500w', 'We are a boutique, multi-channel, creative agency that has produced over 1,500 events across the United States and Canada. We are smart, fun loving and creative people brought together by a shared passion for attention to detail and bringing joy to those who attend our activations and events.', '', '333-867-5309'),
(20, 'Y&I Events', 'https://static1.squarespace.com/static/57fc161ef5e2311c16ea5b20/t/59332e2a6b8f5beeb5aa1070/1593549108335/?format=1500w', 'descDeocration & Design for Special Events of all types: Weddings, Receptions, Corporate Functions, Fundraisers, Galas, Banquets, Quinceaneras, Bar/Bat Mitzvahs, Reunions, Birthdays, and much more!ription', 'addiY&I Events starts and ends the day with our company’s core values and mission in mind: Excellence In Service, Expertise & Knowledge, Inclusiveness & Diversity, and Ethics & Integrity.', '612-618-1406'),
(21, 'The Blaisdell', 'https://static1.squarespace.com/static/59a44761ebbd1a1312cf985b/t/59ee37c34611a04b1e3b5249/1615823840923/?format=1500w', 'This gorgeous, fully-restored 1915 mansion is the perfect venue for your large wedding reception, small, intimate wedding ceremony, corporate event, gala fundraiser, or private party in Minneapolis. From the grand ballroom to the spacious suite and comfortable lounge, The Blaisdell is a one-of-a-kind jewel nestled in the heart of the city. All that’s missing is you!', 'With a range of indoor and outdoor spaces, The Blaisdell allows you to create a wedding or event that reflects your personal tastes. The spacious Ballroom can accommodate up to 250 guests for dinner service while The Courtyard and The Parlor offer a beautiful space for ceremonies and cocktail hours.', '952-288-9966'),
(22, 'Blush Custom Event Decor', 'https://static1.squarespace.com/static/5dc43efb2e2b2933cf3e1d98/t/5e41b5da7bc3911e7c2bfbce/1606628440231/?format=1500w', 'Simply put, I absolutely love all things design! Each project is an exciting challenge for me as I translate ideas and visions into real life. The special events we celebrate are often important milestones in our lives and deserve to be remembered in a beautiful way… and unique, artful statement decor will do just that for you and your guests! A stunning photo backdrop, welcome wall, or perhaps a lovely balloon piece will set the tone for these momentous occasions.', '', '651-402-5474'),
(23, 'Amazing Balloon Entertainment & Decorations', 'http://static1.squarespace.com/static/58b8608537c58149fafa08e0/t/5e9e0a8768b9b14d0a18752f/1579735304886/?format=1500w', 'We specialize in quality event Balloon Entertainment, Decorations & Delivery Service for family parties, corporate functions, and workshops for all levels. With over 20 years experience, our head-turning work is perfect for all occasions, customizable to any theme or color scheme, and is guaranteed to put smiles on the faces of all your guests from ages 1-1000!', '', '612-695-1697'),
(24, 'Charmed! Boutique Decor & Floral', '', 'Distinctive decor, floral & styling for weddings & events in Minneapolis, St. Paul & the Twin Cities Metro Area of Minnesota.', 'Styles ranging from Rustic & Elegant to Tuscan Stone, Gold & Crystal, and many more.', '612-382-2960'),
(25, 'A & J Party and Event Rental', '', 'We bring all of your rental needs to you! No matter your location whether it be Minneapolis, Edina, Lakeville, Bloomington, Farmington Apple Valley or any surrounding Twin Cities area, we charge a reasonable fee to ensure you have what you need for your event. Tables, Chairs, Canopies, and much more- We have what you need to make your party the best it can be!', '', '612-708-3421'),
(26, 'Broadway Party & Tent Rental', '', 'Broadway is a Local Family Owned business & since 1956 we’ve dedicated ourselves to providing quality rental equipment to our community! We’re 2nd Generation owned & operated! Learn more about buying local.', 'Booking your rental products long before the date of your event reduces rushed decisions and gives sufficient time for you and Broadway Party & Tent Rental to work together to plan and prepare an enjoyable event. Ordering early also increases the probability that the products, delivery, and pickup times you want will be available. Last minute changes can be counterproductive and may have adverse affects on an otherwise successful event. At Broadway Party & Tent Rental we make every effort to help you make the best choices for your event!', '763-208-1357'),
(27, 'Minnesota Ice', 'https://www.minnesota-ice.com/images/mni-logo2.svg', 'MINNESOTA ICE IS THE LEADING PRODUCER OF PACKAGED ICE, PURE & CLEAR COCKTAIL ICE, KOLD DRAFT ICE CUBES, CRUSHED ICE, SHAVED ICE BLOCKS, SCULPTURE ICE BLOCKS, AND ICE SCULPTURES', '', '612-254-8330'),
(28, 'Occasions Linen Rental', 'https://www.occasionslinen.com/wp-content/uploads/2016/01/new-logo-wide-xsm.png', 'Whether it’s an intimate gathering or larger gala your event will be remembered for a lifetime. Specialty linens are key to a spectacular table setting and to creating your desired atmosphere. Just remember that your event will be photographed over and over…so you really want to make a lasting impression! Occasions Linen Rental services the Twin Cities and surrounding communities. If there is something that you don’t see on the website let us know we can order it! Together we can create your occasion to remember.', '', '651-387-1726'),
(29, 'Festivities', 'https://www.festivitiesmn.com/wp-content/uploads/2016/01/festvities_logo_318x72.jpg', 'Festivities has the functional, fun & fashionable stuff your event needs, with the design, service & expertise you want.', 'We specialize in weddings, social events, and coproate / non-profits.', '763-682-4846'),
(30, 'Apres Event Decor & Tent Rental', 'https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto:low/remote_media/logos/1573065346_apresparty-com.jpg', 'I started Après 33 years ago out of the lower level of my home. Purchasing a full line of rental inventory and opening at my first location in time for the hectic Christmas season of 1987. We are now working out of more than 63,000 square feet.', 'Serving Minneapolis, St. Paul, Twin Cities, Minnesota, Wisconsin, Iowa, North Dakota, South Dakota', '952-942-3399'),
(31, 'A Touch of Magic Entertainment', 'https://atouchofmagicentertainment.com/wp-content/uploads/2018/01/ATOM_Logo.png', 'We are a family owned and operated full-service entertainment company run by professional entertainers.  Founded in 1986, A Touch of Magic, Inc. is located in St. Paul, Minnesota, the Twin Cities, with entertainers/artists who are nationally renowned in addition to being local favorites. What started as a small project to fund a college education,  has grown into a lifelong passion and desire to bring joy & laughter to our clients!  Maybe that’s why we’ve been named “Best Entertainment” in the Twin Cities over and over again.', 'A Touch of Magic, a Certified Women’s Business Enterprise, specializes in top notch, age-appropriate entertainment for ages 3-93, reasonable prices, and unsurpassed customer support. Through our commitment, experience, and expertise, we have established a business relationship with our customers that is lasting a lifetime.', '651-748-9442'),
(32, 'Karaoke Twin Cities', 'http://img1.wsimg.com/isteam/ip/5551b527-c09a-4f5e-ae4c-35a6fe37d268/79f27784-3cce-418a-bc34-7a794d4621e2.jpg/:/rs=h:500,cg:true,m', 'We provide hosted karaoke entertainment to local bars/restaurants as well as the opportunity to rent our equipment with or without a host to suit your entertainment needs.', 'We  deliver karaoke anywhere in the Twin Cities greater metro area. We may  be willing to travel farther for an additional fee, see our delivery map page for more info.', '612-889-7963'),
(33, 'Northern Sound', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRur8DoOFGWLDmykCuV6KmqYk84-l3-R1q2pg&usqp=CAU', 'The owners of Northern Sound Entertainment have a serious passion for the event service industry. They started this company in 2016 with a vision to shake up the Wedding and Event Services industry.', 'Event DJ, Photo Booth, Event Videos, Karaoke', '612-306-2831'),
(34, 'WedPhoria', 'https://www.minnesotaprodj.com/images/WedPhoria-Banner-hor-300x100.png', 'Your 1-Stop-Shop for Wedding & Special Event Services!', 'DJ, Photography, Videography, Event Planning, Photo Booths', '612-293-764'),
(35, 'Adagio Djay Entertainment', 'https://vol7d4dgnq224poreu2v6gqb-wpengine.netdna-ssl.com/wp-content/uploads/sites/22/2017/01/logo-adagio.svg', 'When the lights go up and the party’s over, all you’ll have left are the memories. At Adagio Djay Entertainment, we specialize in crafting a symphony of music, melodies and excitement into the perfect experience for the most memorable day of your life. From the first dance to the last—we never forget whose day it is.', '', '612-787-3501'),
(36, 'Midwest Sound DJ Entertainment', 'https://static1.squarespace.com/static/54849ccfe4b0b09de1feb208/t/54bdb9c5e4b0a3e130f04409/1608599170100/?format=1500w', 'We created the blueprint for wedding DJ entertainment. We continue to set trends and facilitate remarkable receptions. Our unparalleled training and mentorship program makes our DJs exceptional. We perform at 1,900 receptions every year and each is customized to be one of a kind. Our comprehensive online planning process lets our clients have complete control to guarantee a unique and memorable wedding. With our experience and reliability, we will continue to provide amazing wedding DJ entertainment for many years to come.', '', '651-644-4111'),
(37, `Brancato's Catering`, 'http://brancatoscatering.com/wp-content/uploads/b-logo-e1612471991570.png', 'Whether you’re planning an outdoor event or working with one of Kansas City’s hottest venues, our expert coordinators will offer you the latest in food trends and make your event one to remember. We work closely with Kansas City’s top event venues to help provide you with the best service possible for your big day. If you haven’t selected your venue yet we can help guide you in finding the perfect fit for your big day. Our coordinators will work with you from planning to execution, providing you with expert guidance leading up to your event and throughout your big day making sure your expectations are exceeded.', 'Food is important to the success of your event and our reception – wedding catering is designed to accommodate various budgets. Our customizable options are designed to fit the needs of your event. Brancato’s Catering, selected as one of the city’s best caterers, offers everything from full-service seated dinners, buffets and appetizers to quick and easy drop-off orders. We also offer full liquor packages, bartenders, room flip service, closing service and cake cutting.', '815-765-4707'),
(38, 'Moxie Catering & Event Design', 'http://www.moxiecatering.com/moxieFront01.jpg', '', '', '816-561-0384'),
(39, 'Blue Pot Catering', 'https://thebluepot.com/wp-content/uploads/2016/09/BluePotLogoWide.jpg', 'Kansas City’s premier catering and event designer for weddings, corporate and social events, since 2006. Delight your guests with seasonal, made-from-scratch menu items inspired by the best ingredients.', 'Custom Menus', '816-916-0169'),
(40, `Grandma's Catering`, 'https://grandmascatering.com/wp-content/themes/grandmas/assets/img/logo.png', '', '', '816-472-6362'),
(41, 'Two Sisters Catering', 'http://beta.twosisterscateringkc.com/wp-content/uploads/2013/11/two-sisters-text_011.png', `From a business lunch to your elaborate social event of the year, Two Sisters Catering’s homemade touch and elegance goes into everything we make. Our delicious recipes and eye-appealing dishes have been a Kansas City favorite for more than 10 years.`, 'additionalInfo', '816-737-0846'),
(42, 'EA Catering & Event Space', 'http://www.eacatering.com/publishImages/~master~master~~master7.jpg', `EA Catering & Sons is chef-owned and operated in Kansas City, MO. Since opening in 2006, we’ve treated every customer like they were a part of our family. We are a full service caterer. We create a custom from scratch menu just for you. We can also take care of all your event planning needs. . Chef Argie is a graduate  of the Culinary Institute of America in Hyde Park, New York. He is well reviewed and has 30 years experience in the industry. Free event venue with minimum order! We never cut corners, we use the best natural ingredients we can find, we make everything from scratch. We never use processed or any pre-made foods you will love the difference. Eat Good Live Well!`, `At EA Catering we specialize in fresh, from scratch, healthy food. We use organic produce. Free range, hormone and antibiotic free poultry and free range, grass fed beef. We bake our own bread. Roast and smoke our meats in house. No GMO's! No HFCS! Just good clean food. We know you will taste and feel the difference. Eat Good Live Well`, '913-961-6226'),

(43, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(44, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(45, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(46, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(47, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(48, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(49, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(50, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(51, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(52, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(53, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(54, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(55, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(56, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(57, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(58, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(59, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(60, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(61, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(62, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(63, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(64, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(65, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone'),

(66, 'companyName', 'profilePic', 'description', 'additionalInfo', 'phone');

--Fill vendors_features table with real special_features data for the fake vendors:
INSERT INTO "vendors_features"
("vendorUserId", "featureId")
VALUES 
(2, 3), (4, 3), (6, 1), (6, 3), (4, 3), (7, 3), (8,1), (9, 2), (11, 2), (12, 1),
(14, 3), (15, 1), (16, 3), (17, 2), (18, 1), (19, 1), (21, 1), (22, 1), (23, 3),
(24, 2), (25, 3), (26, 2), (27, 2), (28, 1), (29, 2), (30, 3), (31, 1), (32, 2),
(35, 3), (36, 3), (37, 1), (39, 2), (41, 1),

(43,),

(44,),

(45,),

(46,),

(47,),

(48,),

(49,),

(50,),

(51,),

(52,),

(53,),

(54,),

(55, ),

(56, ),

(57, ),

(58, ),

(59, ),

(60, ),

(61, ),

(62, ),

(63, ),

(64, ),

(65, ),

(66, );

--Fill vendors_services table with real service_types data for the fake vendors:
INSERT INTO "vendors_services"
("vendorUserId", "serviceId")
VALUES
(2, 5), (2, 2), (4, 5), (4, 2), (6, 1), (6, 3), (7, 1), (8, 1), (9, 1), (10, 1),
(11, 1), (12, 1), (13, 2), (14, 2), (15, 2), (16, 2), (17, 2), (18, 2), (19, 3),
(20, 3), (21, 3), (22, 3), (23, 3), (24, 3), (25, 4), (26, 4), (27, 4), (28, 4),
(29, 4), (30, 4), (31, 5), (32, 5), (33, 5), (34, 5), (35, 5), (36, 5), (37, 1),
(38, 1), (39, 1), (40, 1), (41, 1), (42, 1), (43, 2), (44, 2), (45, 2), (46, 2),
(47, 2), (48, 2), (49, 3), (50, 3), (51, 3), (52, 3), (53, 3), (54, 3), (55, 4),
(56, 4), (57, 4), (58, 4), (59, 4), (60, 4), (61, 5), (62, 5), (63, 5), (64, 5),
(65, 5), (66, 5);


--MESSAGES
--Insert fake messages to start conversations:
INSERT INTO "messages"
("fromUser", "toUser", "message")
VALUES
(1, 2, 'What is your rate for 100 people?'), 
(1, 4, 'Is your band able to play in Smithville?'), 
(3, 4, 'Are you available to play a wedding in August?'),
(5, 6, 'Are you licensed to serve your mushrooms in downtown Minneapolis?');

--Insert fake responses to fake messages separately so that the timestamp is different:
INSERT INTO "messages"
("fromUser", "toUser", "message")
VALUES
(2, 1, 'I would like to discuss what activities you would like included- are you available to speak over the phone?'), 
(4, 3, 'What day in August?');


--EVENTS:
--Create fake events for the fake Planners
INSERT INTO "events"
("plannerUserId", "dateOfEvent", "timeOfEvent", "address", "city", "state", "zip", "numberOfAttendees", "description")
VALUES
(1, '2021-04-30', '3:00', '5600 Walnut', 'Smithville', 'MO', 64089, 50, 'Graduation celebration!'),
(3, '2021-08-17', '12:00', '75 Chestnut', 'Lawrence', 'KS', 64048, 200, 'Small wedding with our closest friends and family.'),
(5, '2021-05-05', '5:55', '5 Main St.', 'Minneapolis', 'MN', 55111, 1000, 'Huge Cinco de Mayo art fair.');

--Pair fake events with types_of_events
INSERT INTO "events_types"
("eventId", "typeId")
VALUES
(1, 5), (2, 1), (3, 7);

--Pair fake vendors with fake events
INSERT INTO "events_vendors"
("vendorUserId", "eventId")
VALUES
(2, 1), (4, 2), (6,3);