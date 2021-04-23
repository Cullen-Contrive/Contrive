import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  loginFormContainer: {
    padding: theme.spacing(3),
    height: '500px'
  },
  loginPageButton: {
    fontSize: theme.spacing(2.75),
    width: theme.spacing(15)
  },
  loginPageButtonWrapper:{
    marginTop: theme.spacing(2),
  },
  loginPaper:{
    padding: theme.spacing(2),
  }
}));

export default useStyles;