
// MATERIAL-UI
import useStyles from './MessageAll.styles';
import { Avatar, Divider, Grid, ListItemAvatar, ListItem, ListItemText } from '@material-ui/core';

function Message({ messageDetails, toUserId, currentUser, toUser }) {
  const classes = useStyles();

  return (
    // Conditionally render to or from based on what the user.id is
    // messageDetails.fromUser == currently logged in user id
    // TODO: display the avatar for each user on each side
    <ListItem>
      <Grid container>
        {messageDetails.toUser == toUserId ? (
          <Grid item xs={12}>
            <ListItemAvatar align="right">
              <Avatar
                alt={currentUser.firstName + 'photo'}
                src={currentUser.profilePic}
              />
            </ListItemAvatar>
            <ListItemText
              align="right"
              primary={messageDetails.message}
              secondary={messageDetails.date}
            ></ListItemText>
            <Divider />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <ListItemAvatar align="left">
              <Avatar
                alt={toUser.firstName + 'photo'}
                src={toUser.profilePic}
              />
            </ListItemAvatar>
            <ListItemText
              align="left"
              primary={messageDetails.message}
              secondary={messageDetails.date}
            ></ListItemText>
            <Divider />
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
}

export default Message;
