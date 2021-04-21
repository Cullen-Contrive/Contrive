import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  inline: {
    display: 'inline-block',
    width: '90%',
    marginTop: theme.spacing(1)
  },
  chatAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  messageArea: {
    // height: '70vh',
    overflowY: 'auto',
  },
}));

export default useStyles;