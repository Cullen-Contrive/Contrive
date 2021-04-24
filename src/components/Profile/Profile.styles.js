import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    width: '100%',
    justifyContent: 'space-between',
  },
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
  },
  inlineBlock: {
    display: 'inline-block',
  },
  navContainer: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  profilePicAvatarPreview: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  publicPhotosTop: {
    margin: '0 0 10px 0'
  },
  publicPhotos: {
    margin: '10px 0'
  },
  root: {
    flexGrow: 1,
    //width: '100%',
  }
}))

export default useStyles;