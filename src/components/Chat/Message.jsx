import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Chat.css';

function Message({ messageDetails }) {
  console.log('made it');

  return (
    // Conditionally render to or from based on what the user.id is
    // messageDetails.fromUser === currently logged in user id
    // Should set it up to render on left or right side
    <div className="MessageContainer">
      <Typography>{messageDetails.message}</Typography>
    </div>
  );
}

export default Message;
