import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/core/styles/makeStyles';

function Message({ messageDetails, toUserId, currentUser, toUser }) {
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
