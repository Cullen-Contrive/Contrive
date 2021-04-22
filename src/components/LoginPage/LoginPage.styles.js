import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  loginFormContainer: {
    padding: theme.spacing(3),
  },
  loginPaper:{
    padding: theme.spacing(2),
  }
}));

export default useStyles;