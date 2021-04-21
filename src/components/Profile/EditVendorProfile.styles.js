import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  editFormWrapper: {
    padding: theme.spacing(1.25)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
  },
  profilePicAvatarPreview: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  profilePic: {
    height: '100px',
    width: 'auto',
  },
}))

export default useStyles;