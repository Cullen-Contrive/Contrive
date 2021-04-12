import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProfileName() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
      direction="row"
    >
      {/* Beginning of Profile Name */}
      <Grid item xs={12}>
        <Typography variant="h5" style={{ display: 'inline-block' }}>
          Catherine's Catering
        </Typography>
        <img
          src={process.env.PUBLIC_URL + 'placeholder.png'}
          style={{ width: '25%', height: '100%' }}
        />
      </Grid>
      {/* Beginning of Rating / Certified */}
      <Grid item xs={12}>
        <center>
          {/* Certified or not */}
          <CheckCircleIcon fontSize="large" style={{ color: 'green' }} />
          {/* Rating will go here */}
          <img
            src={process.env.PUBLIC_URL + 'stars.jpg'}
            style={{ width: '70%' }}
          />
        </center>
      </Grid>
    </Grid>
  );
}

export default ProfileName;
