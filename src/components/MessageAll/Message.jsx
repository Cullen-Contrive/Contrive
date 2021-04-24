// Component to display individual messages, feeds into MessageAll.jsx

// MATERIAL-UI
import useStyles from './MessageAll.styles';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from '@material-ui/core';

function Message({ messageDetails, toUserId, currentUser, toUser }) {
  const classes = useStyles();

  console.log('message:', messageDetails);
  console.log('currentUser', currentUser);
  console.log('toUser', toUser);

  return (
    // Conditionally render to or from based on what the user.id is
    // messageDetails.fromUser == currently logged in user id
    <ListItem>
      <Grid container>
        {messageDetails.toUser == toUserId ? (
          <Grid item xs={12}>
            <ListItem>
              <div className={classes.chatBubbleRight}>
                <ListItemText
                  align="right"
                  primary={messageDetails.message}
                  secondary={messageDetails.dateReceived}
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
        ) : (
          <Grid item xs={12}>
            <ListItem>
              <ListItemAvatar align="left">
                <Avatar
                  alt={toUser.firstName + 'photo'}
                  src={toUser.profilePic}
                />
              </ListItemAvatar>
              <div className={classes.chatBubbleLeft}>
                <ListItemText
                  align="left"
                  primary={messageDetails.message}
                  secondary={messageDetails.dateReceived}
                ></ListItemText>
              </div>
            </ListItem>
            <Divider />
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
}

export default Message;
