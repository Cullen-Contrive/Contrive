// View of all message thread between logged-in user and one specific other user.
// Reached by path '/message/${messageId}'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import io from 'socket.io-client';
import Swal from 'sweetalert2';

// Material UI
import useStyles from './MessageAll.styles';
import {
  Box, Button,
  Paper, Grid,
  TextField, Typography,
  List, ListItemText
} from '@material-ui/core';


// Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { FavoriteBorder } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';

// Custom Components
import Message from './Message';


function MessageConversation() {
  const classes = useStyles();
  const socketRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const [message, setMessage] = useState('');
  const ENDPOINT = 'http://localhost:4000'; // Ideally, this value will be set in a .env when deployed

  const existingMessages = useSelector((store) => store.chat.chatReducer);
  const currentUser = useSelector((store) => store.user);
  const toUser = useSelector((store) => store.otherUserDetails);


  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT);
    // Join the chat room
    socketRef.current.emit('join', {
      name: currentUser.firstName + currentUser.lastName,
      room: 'Room Code - 4576',
    });
    // Fetch current messages
    fetchMessages();
    fetchToUserDetails();
  }, []);

  const fetchMessages = () => {
    // Fetches messages between fromUser and toUser
    dispatch({ type: 'FETCH_MESSAGES', payload: params.id });
  };

  const fetchToUserDetails = () => {
    // Fetches display info for second user of conversation
    dispatch({ type: 'FETCH_USER_DETAILS_BY_ID', payload: params.id });
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

    const date = new Date();
    const formattedDate = date.toISOString();
    const messageObject = {
      date: formattedDate,
      fromUser: currentUser.id,
      message: message,
      toUser: params.id,
    };

    dispatch({
      type: 'POST_MESSAGE',
      payload: {
        data: messageObject,
        onComplete: () => {
          fetchMessages();
        },
      },
    });
    setMessage('');
    socketRef.current.emit('send message', messageObject);
  };

  const goBack = () => {
    // Take user back to most recent page visited (either messageList or vendor profile)
    history.goBack();
  };



  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex">
            <Button startIcon={<ArrowBackIosIcon />} onClick={goBack}></Button>
            <Typography variant="h5" className="header-message">
              {toUser.companyName == null
                ? `Messages to ${toUser.firstName} ${toUser.lastName}`
                : toUser.companyName}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {existingMessages.length > 0 ? (
              existingMessages.map((singleMessage, index) => {
                return (
                  <Message
                    key={index}
                    messageDetails={singleMessage}
                    toUserId={params.id}
                    currentUser={currentUser}
                    toUser={toUser}
                  />
                );
              })
            ) : (
              <ListItemText align="left">Start a conversation!</ListItemText>
            )}
          </List>
          <form onSubmit={sendMessage}>
            <Grid container style={{ padding: '20px' }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  value={message}
                  onChange={(evt) => setMessage(evt.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid xs={1} align="right">
                <Button
                  color="primary"
                  aria-label="add"
                  type="submit"
                  endIcon={<SendIcon />}
                ></Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageConversation;
