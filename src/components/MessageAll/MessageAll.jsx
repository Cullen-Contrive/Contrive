// View of all messages related to the logged-in user.
// Reached by path '/message'
import { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

function MessageAll() {
  const [message, setMessage] = useState('');
  const ENDPOINT = 'http://localhost:4000'; // Ideally, this value will be set in a .env when deployed

  const socketRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const existingMessages = useSelector((store) => store.chat.chatReducer);
  const currentUser = useSelector((store) => store.user);

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT);
    // Join the chat room
    socketRef.current.emit('join', {
      name: currentUser.firstName + currentUser.lastName,
      room: 'Room Code - 4576',
    });
    // Fetch current messages
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    dispatch({ type: 'FETCH_MESSAGES', payload: params.id });
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
    console.log('moving pages now');
    // history.push('/alldetails');
  };

  console.log('existingMessages', existingMessages);

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
          {existingMessages.length > 0 ? (
            existingMessages.map((singleMessage, index) => {
              return (
                <Message
                  key={index}
                  messageDetails={singleMessage}
                  toUser={params.id}
                />
              );
            })
          ) : (
            <Typography>Start a conversation!</Typography>
          )}
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
