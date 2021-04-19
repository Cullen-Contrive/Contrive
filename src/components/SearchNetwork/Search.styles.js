import { fade, makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  cardSize: {
    // height: "100%",
    height: "200px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  gridContainer: {
    paddingTop: "10px",
    padding: theme.spacing(1),
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  imgSize: {
    maxHeight: "75px",
    minHeight: "40px"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    marginLeft: '50px',
    // textAlign: "center"
    // margin: '1',
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
  search: {
    position: 'relative',
    borderRadius: 18,
    border: '1px solid black',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
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