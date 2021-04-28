![MIT LICENSE](https://img.shields.io/github/license/Cullen-Contrive/Contrive.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/Cullen-Contrive/Contrive.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/Cullen-Contrive/Contrive.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/Cullen-Contrive/Contrive.svg?style=social)

# Contrive Application

## Description

_Duration: 2 Week Sprint_

Contrive is an event management software platform that connects Event Planners with their local Vendors. With enhanced search features, Planners can find the types of Vendors they most want to do business with and can easily connect with them utilizing the messaging feature.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![Welcome Page]()
![The Network (Search)]()
![All Messages]()
![Message Thread]()

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [ASW](https://aws.amazon.com/)
- [Express](https://expressjs.com/)
- [Material-UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Passport](http://www.passportjs.org/)
- [Postico](https://eggerapps.at/postico/)
- [PostrgeSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Sagas](https://redux-saga.js.org/)
- [Socket.io](https://socket.io/)

## Create database and table

### Application Database:

Create a new postgreSQL database named `contrive_db` and copy all text in the `database.sql` file saved in the root folder of this repository. Paste all the copied text as a SQL query ([Postico](https://eggerapps.at/postico/) was used for original database creation) and execute the queries sequentially (Note: DROP TABLE queries at the top of the document will not do anything on initial setup since there are no tables yet created, and these DROP TABLE queries should be used carefully, as they permanently delete tables and any stored data therein.) To load sample data, copy all text in the `dummyData.sql` file saved in the root folder and paste the copied text as a SQL query. Execute the queries sequentially to load the sample data.

## Setting up AWS S3 Bucket

Refer to [AWSSetUp](./AWSSetUp.md) documentation on how to get started with an AWS S3 Bucket.

## Development Setup Instructions

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `contrive_db` (see **Application Database** [Application Database](https://github.com/Cullen-Contrive/Contrive#application-database) section above).
2. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using [Postico](https://eggerapps.at/postico/) to run the queries as that was used to create the queries.

   - The queries in the `database.sql` file are set up to create all the necessary tables (see **Application Database** section above).

   - The queries in the `dummyData.sql` file are set up to populate the needed data to allow the application to run correctly (see **Application Database** section above).

3. Create a `.env` file in the root directory and edit it as follows:

   - Paste this line into the file:

   ```javascript
   SERVER_SESSION_SECRET = superDuperSecret;
   ```

   While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [Secure Password Generator](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

   - Paste the following lines into the file for db setup and deployment options:

   ```javascript
   PGDATABASE = contrive_db;
   PGPORT = 5432;
   ```

   - Paste the following lines into the file for ASW setup:

   ```javascript
   AWS_ACCESS_KEY_ID = xx;
   AWS_SECRET_ACCESS_KEY = xx;
   REACT_APP_S3_URL = xx;
   AWS_S3_BUCKET = xx;
   AWS_S3_REGION = xx;
   ```

   You will need to enter your own values for `xx` after the `=` sign for each key value pair. Refer to step 7 in [AWSSetUp](./AWSSetUp.md).

4. Start PostgreSQL if not already running by using the `brew services start postgresql` command in your terminal.
5. Open up your editor of choice and run an `npm install`.
6. Run `npm run server` in your terminal.
7. Run `npm run client` in your terminal.
8. The `npm run client` command will open up a new browser tab for you!
   - If a new browser doesn't open, navigate to `localhost:3000` in the browser.

## Lay of the Land

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` contains the transpiled code from `src/` and `public/` that will be viewed on the production site (Heroku)
- `server/` contains the Express App

This code is commented in each individual file with the aim to make it accessible.

## Usage

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx

## Authors

- Dusty Meyers [Dusty's Site](https://dustymeyers.com)
- Jason Lin [Jason's Site](https://github.com/jasonwl1995)
- John Shands [John's Site](https://www.johnshands.com/)
- McKynlee Westman [McKynlee's Site](https://mckynlee.github.io/about/)
- William Krug [William's Site](https://william-krug-portfolio.herokuapp.com/#/home)

## Built with:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ASW](https://aws.amazon.com/)
- [Express](https://expressjs.com/)
- [Material-UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Passport](http://www.passportjs.org/)
- [Postico](https://eggerapps.at/postico/)
- [PostrgeSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Sagas](https://redux-saga.js.org/)
- [Socket.io](https://socket.io/)
- [SweetAlert2](https://sweetalert2.github.io/)

A full list of dependencies can be found in the `package.json` file in the root directory.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Aretha McDonald & Alexandria Watkins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgement

Thanks to Aretha McDonald and Alexandria Watkins for giving use the opportunity to develop this prototype for them. Thank you [Prime Digital Academy](https://www.primeacademy.io/) who equipped us with the skills to make this application a reality. The Cullen cohort for always having our backs and helping us every step of the way and Team Contrive for building one killer app.
