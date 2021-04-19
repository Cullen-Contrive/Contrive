// View of all messages related to the logged-in user.
// Reached by path '/message'
import { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import io from 'socket.io-client';
import Swal from 'sweetalert2';

// Material UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

// Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { FavoriteBorder } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';

// Custom Components
import Message from './Message';

const Form = styled.form`
  width: 400px;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
});

function MessageAll() {
  const [message, setMessage] = useState('');
  const ENDPOINT = 'http://localhost:4000'; // Ideally, this value will be set in a .env when deployed

  const socketRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const existingMessages = useSelector((store) => store.chat.chatReducer);
  const currentUser = useSelector(
    (store) => store.userDetails.loggedInUserDetailsReducer
  );
  const toUser = useSelector(
    (store) => store.userDetails.otherUserDetailsReducer
  );

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT);
    // Join the chat room
    socketRef.current.emit('join', {
      name: currentUser.firstName + currentUser.lastName,
      room: 'Room Code - 4576',
    });
    // Fetch current messages
    fetchMessages();
    fetchLoggedInUserDetails();
    fetchToUserDetails();
  }, []);

  const fetchMessages = () => {
    // Fetches messages between fromUser and toUser
    dispatch({ type: 'FETCH_MESSAGES', payload: params.id });
  };

  const fetchLoggedInUserDetails = () => {
    // Fetches display info for logged in user of conversation
    dispatch({ type: 'FETCH_LOGGED_IN_USER_DETAILS' });
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
    // TODO: push to wherever the previous place was
    history.push('/messages');
  };

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Button startIcon={<ArrowBackIosIcon />} onClick={goBack}></Button>
          <Typography variant="h5" className="header-message">
            {`${toUser.firstName} ${toUser.lastName}`}
          </Typography>
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

export default MessageAll;
