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
  Box,
  Button,
  IconButton,
  Paper,
  Grid,
  TextField,
  Typography,
  List,
  ListItemText,
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
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex">
            <Button
              color="primary"
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              Go Back
            </Button>
            <Typography variant="h5" className="headerMessage">
              {toUser.companyName == null
                ? `Messages with ${toUser.firstName} ${toUser.lastName}`
                : `Messages with ${toUser.companyName}`}
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
              <Grid item xs={12}>
                <ListItem>
                  <div className={classes.chatBubbleRight}>
                    <ListItemText
                      align="right"
                      primary="Start a Conversation"
                    ></ListItemText>
                  </div>
                  <ListItemAvatar align="right">
                    <Avatar
                      alt={currentUser.firstName + 'photo'}
                      src={currentUser.profilePic}
                    />
                  </ListItemAvatar>
                </ListItem>
                <Divider />
              </Grid>
            )}
          </List>
          <form onSubmit={sendMessage}>
            <Grid
              container
              style={{
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid item xs={9}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  value={message}
                  onChange={(evt) => setMessage(evt.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid xs={3} align="right">
                <IconButton
                  color="primary"
                  aria-label="send message"
                  type="submit"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageConversation;
