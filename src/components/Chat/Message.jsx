import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Chat.css';

function Message({ message }) {
  console.log('made it');

  return (
    <div className="MessageContainer">
      <Typography>{message.body}</Typography>
    </div>
  );
}

export default Message;
