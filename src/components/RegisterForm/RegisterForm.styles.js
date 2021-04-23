import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
  },
  registerFormButton: {
    fontSize: theme.spacing(2.75),
    width: theme.spacing(15)
  },
  registerFormButtonContainer:{
    marginTop: theme.spacing(2),
  },
  registerFormContainer: {
    padding: theme.spacing(2),
  },
}))

export default useStyles;