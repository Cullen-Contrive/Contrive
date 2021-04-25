// Component to display individual messages, feeds into MessageAll.jsx

// MATERIAL-UI
import useStyles from './MessageAll.styles';
import {
  Avatar,
  Divider,
  Grid,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from '@material-ui/core';

function Message({ messageDetails, toUserId, currentUser, toUser }) {
  const classes = useStyles();

  return (
    // Conditionally render to or from based on what the user.id is
    // messageDetails.fromUser == currently logged in user id
    <ListItem>
      <Grid container>
        {messageDetails.toUser == toUserId ? (
          <Grid item xs={12}>
            <ListItem>
              <Grid item xs={9}>
                <div className={classes.chatBubbleRight}>
                  <ListItemText
                    align="right"
                    primary={messageDetails.message}
                    secondary={messageDetails.dateReceived}
                  ></ListItemText>
                </div>
              </Grid>
              <Grid item xs={3}>
                <ListItemText
                  align="center"
                  primary={
                    currentUser.companyName
                      ? currentUser.companyName
                      : currentUser.firstName
                  }
                ></ListItemText>
                <ListItemAvatar align="center">
                  <Avatar
                    alt={currentUser.firstName + 'photo'}
                    src={currentUser.profilePic}
                  />
                </ListItemAvatar>
              </Grid>
            </ListItem>
            <Divider />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <ListItem>
              <Grid item xs={3}>
                <ListItemText
                  align="center"
                  primary={
                    toUser.companyName ? toUser.companyName : toUser.firstName
                  }
                ></ListItemText>
                <ListItemAvatar align="center">
                  <Avatar
                    alt={toUser.firstName + 'photo'}
                    src={toUser.profilePic}
                  />
                </ListItemAvatar>
              </Grid>
              <Grid item xs={9}>
                <div className={classes.chatBubbleLeft}>
                  <ListItemText
                    align="left"
                    primary={messageDetails.message}
                    secondary={messageDetails.dateReceived}
                  ></ListItemText>
                </div>
              </Grid>
            </ListItem>
            <Divider />
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
}

export default Message;
