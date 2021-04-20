// View of all messages (with any other users) related to the logged-in user.
// Reached by path '/messages'

import { Fragment, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material-UI components
import useStyles from './MessageAll.styles.js'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';


function MessagesList() {
  const classes = useStyles();
  const user = useSelector((store) => store.user);
  const conversations = useSelector((store) => store.chat.allMessagesReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_MESSAGES', payload: user.id })
  }, [])

  const viewConversation = (messengerId) => {
    console.log('in viewConversation, messengerId:', messengerId);
    history.push(`/message/${messengerId}`);
  }

  console.log('list of conversations:', conversations);
  return (
    <>
      <Box p={1}>
        <Typography variant="h2" align="center">Messages</Typography>
      </Box>

      <Divider />

      <List className={classes.messagesList}>
        {conversations.map((conversation, index) => {
          // this will be the id of the user that the logged in user is having a conversation with
          let messenger;

          if (conversation.greatest === user.id) {
            messenger = conversation.least;
          } else {
            messenger = conversation.greatest;
          }

          return (
            <div key={index}>
              <ListItem alignItems="flex-start" onClick={() => viewConversation(messenger)}>
                {/* This is the profile pic of the user that the logged in user is having a conversation with */}
                <ListItemAvatar className={classes.chatAvatar}>
                  <Avatar className={classes.chatAvatar} alt={conversation.companyName} src={conversation.profilePic} />
                </ListItemAvatar>

                {/* The primary text is the name of the user that the logged in user is having a conversation with,
                    The secondary text is a preview of the last message sent in the conversation. */}
                <ListItemText
                  primary={conversation.companyName} // primary text will be rendered from reducer
                  secondary={
                    <Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        noWrap
                        color="textPrimary"
                      >
                        {conversation.message}
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItem>

              {/* Creates Divider Line Between Each List item */}
              <Divider variant="middle" component="li" />
            </div>
          );
        })}

      </List>
    </>
  );
} // end MessagesList

export default MessagesList;