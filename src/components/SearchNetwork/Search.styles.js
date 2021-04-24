import { fade, makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  cardInteriorWrapper: {
    height: "100%",
    // paddingTop: theme.spacing(1)
  },
  cardSize: {
    height: theme.spacing(29),
  },
  imgSize: {
    height: theme.spacing(10),
    width: theme.spacing(10)
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    marginLeft: '50px',
  },
  networkSearchContainer: {
    padding: theme.spacing(2),
  },
  resultCardHeader: {
    marginTop: theme.spacing(1.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  search: {
    position: 'relative',
    borderRadius: 18,
    border: '1px solid black',
    marginRight: theme.spacing(1),
    marginLeft: 0,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default useStyles;