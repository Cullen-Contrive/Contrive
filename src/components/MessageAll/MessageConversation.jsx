// View of all message thread between logged-in user and one specific other user.
// Reached by path '/message/${messageId}'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import Swal from 'sweetalert2';

// Material UI
import useStyles from './MessageAll.styles';
import {
  Button,
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
    dispatch({ type: 'FETCH_MESSAGE_CONVERSATION', payload: params.id });
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
      <Grid container className={classes.chatSpacing}>
        {/* Header */}
        <Grid item xs={3}>
          <Button
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={goBack}
          >
            Go Back
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5" className="headerMessage">
            {toUser.companyName == null
              ? `${toUser.firstName} ${toUser.lastName}`
              : `${toUser.companyName}`}
          </Typography>
        </Grid>
      </Grid>
      {/* Chat Section */}
      <Grid container className={classes.chatSection}>
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
              //
              <ListItem>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <div className={classes.chatBubbleRight}>
                    <ListItemText
                      align="right"
                      primary="Start a Conversation!"
                    ></ListItemText>
                  </div>
                </Grid>
              </ListItem>
            )}
          </List>
          {/* Form */}
          <form onSubmit={sendMessage}>
            <Grid
              container
              className={classes.chatSendMessage}
              alignItems="flex-end"
              justify="space-between"
            >
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  multiline
                  value={message}
                  onChange={(evt) => setMessage(evt.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid xs={3}>
                <Button color="primary" type="submit" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageConversation;
