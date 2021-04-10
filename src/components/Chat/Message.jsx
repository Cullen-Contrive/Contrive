import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Chat.css';

function Message({ messageDetails }) {
  console.log('made it');

  return (
    // Conditionally render to or from based on what the req.user.id is
    <div className="MessageContainer">
      <Typography>{messageDetails.message}</Typography>
    </div>
  );
}

export default Message;
