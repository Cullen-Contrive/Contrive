const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const userDetailsRouter = require('./routes/user.details.router');
const eventRouter = require('./routes/event.router');
const eventTypesRouter = require('./routes/event.types.router');
const messageRouter = require('./routes/message.router');
const vendorRouter = require('./routes/vendor.router');
const specialFeaturesRouter = require('./routes/specialFeatures.router');
const vendorTypesRouter = require('./routes/vendorTypes.router');
const searchRouter = require('./routes/search.router');
const plannerRouter = require('./routes/planner.router');

// AWS uploader
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

// AWS Configuration //
app.use(
  '/s3',
  UploaderS3Router({
    bucket: process.env.AWS_S3_BUCKET,           // required
    region: process.env.AWS_S3_REGION,           // optional
    headers: {
      'Access-Control-Allow-Origin': '*',
    }, // optional
    // ACL: 'private', // this is the default - set to `public-read` to let anyone view uploads
    ACL: 'public-read',
    signatureVersion: 'v4',
  })
);

// Body parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/user/details', userDetailsRouter);
app.use('/api/event', eventRouter);
app.use('/api/types', eventTypesRouter);
app.use('/api/message', messageRouter);
app.use('/api/vendor', vendorRouter);
app.use('/api/specialfeatures', specialFeaturesRouter);
app.use('/api/vendortypes', vendorTypesRouter);
app.use('/api/search', searchRouter);
app.use('/api/planner', plannerRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
