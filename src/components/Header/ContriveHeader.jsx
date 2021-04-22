import { useSelector } from 'react-redux';

// Material-UI components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Custom Components
import contriveLogo from '../Images/contriveLogo.png';
import useStyles from './Header.styles';

function ContriveHeader() {
  const classes = useStyles();
  const user = useSelector((store) => store.user);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={0} className={classes.contriveHeader}>
      
      <Grid item xs={4}>
        <img
          className={classes.headerLogo}
          src={contriveLogo}
        />
      </Grid>

      <Grid item xs={8}>
        <Typography
          variant="h2"
          component="h1"
          className={classes.headerText}
        >
          Contrive
        </Typography>
      </Grid>

    </Grid>
  );
}

export default ContriveHeader;