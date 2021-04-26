# Contrive Application

Contrive is an event management software platform that connects Event Planners with their local Vendors. With enhanced search features, Planners can find the types of Vendors they most want to do business with and can easily connect with them utilizing the message feature.

## Built with:

JS, HTML, CSS, React, Material-UI, Moment.js, Redux, Redux-Sagas, Node, Express, Passport, Socket.io, AWS, Postico and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

### Application Database:

Create a new postgreSQL database named `contrive_db` and copy all text in the database.sql file saved in the root folder of this repository. Paste all the copied text as a SQL query (Postico was used for original database creation) and execute the queries sequentially (Note: DROP TABLE queries at the top of the document will not do anything on initial setup since there are no tables yet created, and these DROP TABLE queries should be used carefully, as they permanently delete tables and any stored data therein.) To load sample data, copy all text in the dummyData.sql file saved in the root folder and paste the copied text as a SQL query. Execute the queries sequentially to load the sample data.

### Location Database:

## Setting up AWS S3 Bucket

Refer to the AWSSetUp.md documentation on how to get started with an AWS S3 Bucket.

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Lay of the Land

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` contains the transpiled code from `src/` and `public/` that will be viewed on the production site (Heroku)
- `server/` contains the Express App

This code is commented in each individual file with the aim to make it accessible.

## Authors

- Dusty Meyers [Dusty's Site](https://)
- Jason Lin [Jason's Site](https://)
- John Shands [John's Site](https://www.johnshands.com/)
- McKynlee Westman [McKynlee's Site](https://mckynlee.github.io/about/)
- William Krug [William's Site](https://william-krug-portfolio.herokuapp.com/#/home)

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
