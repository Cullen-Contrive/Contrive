const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // this likely needs to be changed to wherever the origin requests are coming from
    methods: ['GET', 'POST'],
  },
});

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const awsRouter = require('./routes/aws.router');
const messageRouter = require('./routes/message.router');

// TODO AWS const
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

// AWS Configuration //
app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'cullen-contrive', // required
    region: 'us-east-2', // optional
    // bucket: process.env.AWS_S3_BUCKET,           // required
    // region: process.env.AWS_S3_REGION,           // optional
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
app.use('/api/aws', awsRouter);
app.use('/api/message', messageRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

//Whenever someone connects this gets executed
io.on('connection', (socket) => {
  console.log('a user connected!!!!!!!');

  socket.on('disconnect', () => {
    console.log('User has disconnected!');
  });

  socket.on('join', ({ name, room }) => {
    console.log('User has joined chat!', name, room);
  });

  socket.on('send message', (message) => {
    console.log('Got a message', message);
    io.emit('send message', message);
  });
});

http.listen(4000, function () {
  console.log('listening on port 4000');
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
