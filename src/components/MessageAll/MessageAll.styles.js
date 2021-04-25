import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  headerMessage: {
    display: 'block',
    margin: '0 auto',
  },
  inline: {
    display: 'inline-block',
    width: '90%',
    marginTop: theme.spacing(1),
  },
  chatAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  chatBubbleLeft: {
    display: 'flex',
    padding: 10,
    borderRadius: '20px 20px 20px 0',
    backgroundColor: '#dfe6e9',
  },
  chatBubbleRight: {
    display: 'flex',
    padding: 10,
    borderRadius: '20px 20px 0 20px',
    backgroundColor: '#dff9fb',
  },
  chatSection: {
    width: '100%',
    height: '70vh',
  },
  chatSendMessage: {
    margin: 10,
    marginTop: 30,
    bottom: 50,
    padding: 10,
    position: 'relative',
  },
  chatSpacing: {
    margin: 10,
  },
  messageArea: {
    overflowY: 'auto',
  },
}));

export default useStyles;
