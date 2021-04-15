import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;