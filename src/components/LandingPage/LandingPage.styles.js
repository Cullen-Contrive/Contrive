import { makeStyles } from '@material-ui/core/styles';
import Image from '../Images/contriveLanding.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paperContainer: {
    height: '625px',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8
  },
  centerBox: {
    justifyContent: "flex-center",
    alignItems: "flex-center"
  },
  buttons: {
    position: 'absolute',
    bottom: theme.spacing.unit * 25,
  }
}));

export default useStyles;