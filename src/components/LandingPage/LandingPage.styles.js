import { makeStyles } from '@material-ui/core/styles';
import Image from '../Images/contriveLanding.png';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    height: '725px',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  welcomeButton: {
    fontSize: theme.spacing(2.75),
    width: theme.spacing(20)
  },
  welcomeButtonsContainer: {
    backgroundColor: '#000',
    padding: theme.spacing(1.5),
  }
}));

export default useStyles;