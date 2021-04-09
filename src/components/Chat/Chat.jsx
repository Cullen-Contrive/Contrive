import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import io from 'socket.io-client';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Messages from './Messages';

const Form = styled.form`
  width: 400px;
`;

function Chat() {
  const [yourId, setYourId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const ENDPOINT = 'http://localhost:4000'; // Ideally, this value will be set in a .env when deployed

  const socketRef = useRef();
  const history = useHistory();

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
  }, []);

  useEffect(() => {
    socketRef.current.on('send message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (evt) => {
    evt.preventDefault(); // prevents the form from refreshing the page
    // console.log('sending message after form submission');
    const messageObject = {
      body: message,
      id: yourId, // req.user.id may go here and then we validate on the messages
    };
    setMessage('');

    // console.log('emitting message to server');
    socketRef.current.emit('send message', messageObject);
  };

  const goBack = () => {
    console.log('pushing to a previous page');
  };

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
          {/* Messages should eventually come from redux rather than local state */}
          <Messages messages={messages} />
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

export default Chat;
