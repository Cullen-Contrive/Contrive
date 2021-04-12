import React from 'react';

// View of all messages related to the logged-in user.
// Reached by path '/message'
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import io from 'socket.io-client';
import DateObject from 'react-date-object';
import Swal from 'sweetalert2';

// Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// Custom Components
import Message from './Message';

const Form = styled.form`
  width: 400px;
`;

function Chat() {
  const [yourId, setYourId] = useState();
  const [outgoingMessages, setOutgoingMessages] = useState([]);
  const [message, setMessage] = useState('');
  const ENDPOINT = 'http://localhost:4000'; // Ideally, this value will be set in a .env when deployed

  const socketRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const existingMessages = useSelector((store) => store.chat);

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT);
    socketRef.current.emit('join', {
      name: 'Username will go here',
      room: 'room code will go here if need',
    });
    socketRef.current.on('message', (message) => {
      console.log('here', message);
      receiveMessage(message);
    });
    fetchMessages();
  }, []);

  useEffect(() => {
    socketRef.current.on('send message', (message) => {
      setOutgoingMessages((outgoingMessages) => [...outgoingMessages, message]);
    });
  }, []);

  const fetchMessages = () => {
    dispatch({ type: 'FETCH_MESSAGES' });
  };

  const sendMessage = (evt) => {
    evt.preventDefault(); // prevents the form from refreshing the page
    if (message.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Message',
        text: 'Cannot send empty messages!',
        showCloseButton: true,
      });
      return; // return so the function does not execute
    }
    const date = new DateObject();
    const formattedDate = date.format('YYYY-MM-DD hh:mm:ss.SSS');
    const messageObject = {
      date: formattedDate,
      fromUser: 2,
      message: message,
      // id will be inserted on POST
      toUser: 3,
    };
    setMessage('');
    socketRef.current.emit('send message', messageObject);
  };

  const goBack = () => {
    // posts messages to db upon moving from page.
    dispatch({
      type: 'POST_OUTGOING_MESSAGES',
      payload: outgoingMessages,
      onComplete: () => {
        console.log('moving pages now!');
        // history.push('/alldetails') ???
      },
    });
  };

function MessageAll() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button startIcon={<ArrowBackIosIcon />} onClick={goBack}></Button>
        <span>
          <Typography variant="h3">Conversation Name Goes Here</Typography>
        </span>
      </Grid>
      <Grid item xs={12}>
        <Paper
          style={{
            backgroundColor: '#fe67',
            height: 300,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          {/* existingMessages comes from database */}
          {existingMessages.length > 0
            ? existingMessages.map((singleMessage, index) => {
                return <Message key={index} messageDetails={singleMessage} />;
              })
            : ' '}

          {/* outgoingMessages is stored in local state and pushed to database on moving page */}
          {outgoingMessages.length > 0
            ? outgoingMessages.map((singleMessage, index) => {
                return <Message key={index} messageDetails={singleMessage} />;
              })
            : ' '}
        </Paper>
      </Grid>
      {/* Form for submitting text to another user */}
      <Grid item xs={12}>
        <Form onSubmit={sendMessage}>
          <TextField
            value={message}
            style={{ margin: 8 }}
            fullWidth
            onChange={(evt) => setMessage(evt.target.value)}
            placeholder="Say something"
          ></TextField>
          <Button type="submit" color="primary" variant="contained">
            Send Message
          </Button>
        </Form>
      </Grid>
    </Grid>
  );
}


export default MessageAll;
