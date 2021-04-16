import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Chat.css';

import makeStyles from '@material-ui/core/styles/makeStyles';

function Message({ messageDetails, toUserId, currentUser, toUser }) {
  const useStyles = makeStyles((theme) => ({
    container: {
      bottom: 0,
    },
    bubbleContainerLeft: {
      width: '100%',
      display: 'flex', //new added flex so we can put div at left and right side
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
    },
    bubbleContainerRight: {
      width: '100%',
      display: 'flex', //new added flex so we can put div at left and right side
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
    bubble: {
      border: '0.5px solid black',
      borderRadius: '10px',
      margin: '5px',
      padding: '10px',
      display: 'inline-block',
    },
  }));
  const classes = useStyles();

  return (
    // Conditionally render to or from based on what the user.id is
    // messageDetails.fromUser == currently logged in user id
    // TODO: display the avatar for each user on each side
    <>
      {messageDetails.toUser == toUserId ? (
        // display on right
        <div className={`${classes.bubbleContainerRight}`}>
          <Avatar
            alt={currentUser.firstName + 'photo'}
            src={currentUser.profilePic}
          />
          {messageDetails.date}
          <div className={classes.bubble}>
            <div className={classes.button}>{messageDetails.message}</div>
          </div>
        </div>
      ) : (
        // display on left
        <div className={`${classes.bubbleContainerLeft}`}>
          <Avatar alt={toUser.firstName + 'photo'} src={toUser.profilePic} />
          {messageDetails.date}
          <div className={classes.bubble}>
            <div className={classes.button}>{messageDetails.message}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
