import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EventNetworkAccordion from './EventNetworkAccordion';
import EventVendorsAccordion from './EventVendorsAccordion';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function EventCreatedConfirmation() {
  const classes = useStyles();
  const history = useHistory();

  const goToSearch = () => {
    // for redirecting to /search page where planners can search for vendors
    history.push('/search');
  };

  const goToMyEvents = () => {
    // for redirecting to /my/events where planners will see their list of events
    history.push('/my/events');
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box display="flex" align="center" justify="center">
          <Typography variant="h2">Event Created!</Typography>
        </Box>
        <Box display="flex" align="center" justify="center">
          <Typography variant="body1">
            Your event was successfully created. If you'd like to start inviting
            vendors to work at your event, feel free to connect with the
            vendors. Take a look below to find some vendors for your event!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <EventVendorsAccordion />
      </Grid>
      <Grid item xs={12}>
        <EventNetworkAccordion />
      </Grid>

      <Box align="center" width="100%">
        <Box className={classes.root}>
          {/* Buttons go here */}
          <Button color="primary" variant="contained" onClick={goToSearch}>
            Search Vendors
          </Button>
          <Button color="secondary" variant="contained" onClick={goToMyEvents}>
            Skip for Now
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default EventCreatedConfirmation;
