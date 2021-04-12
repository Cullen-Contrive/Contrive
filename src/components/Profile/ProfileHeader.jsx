import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProfileHeader() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
      direction="row"
    >
      <Grid item xs={12}>
        <img
          className=""
          src={process.env.PUBLIC_URL + 'placeholder.png'}
          style={{
            width: '25%',
          }}
        />
        <Typography
          variant="h2"
          style={{
            display: 'inline-block',
          }}
        >
          Contrive
        </Typography>
      </Grid>
      {/* Beginning of Profile Name */}
      <Grid item xs={12}>
        <Typography variant="h5" style={{ display: 'inline-block' }}>
          Catherine's Catering
        </Typography>
        <img
          src={process.env.PUBLIC_URL + 'placeholder.png'}
          style={{ width: '25%', position: 'fixed' }}
        />
      </Grid>
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

export default ProfileHeader;
