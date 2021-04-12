import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Chat.css';

function Messages({ messages }) {
  console.log('made it');

  for (const message of messages) {
    console.log(message);
  }

  return (
    <div className="MessageContainer">
      {messages.map((message, index) => {
        return <Typography key={index}>{message.body}</Typography>;
      })}
    </div>
  );
}

export default Messages;
