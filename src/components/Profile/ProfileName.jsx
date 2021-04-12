import { Grid, Box, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProfileName() {
  return (
    <Grid container spacing={3}>
      {/* Beginning of Profile Name */}
      <Grid item xs={12} center>
        <Box
          display="flex"
          flex-direction="column"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Typography variant="h5" style={{ display: 'inline-block' }}>
            Catherine's Catering
          </Typography>
          <img
            src={process.env.PUBLIC_URL + 'stars.jpg'}
            style={{ height: '50px' }}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          {/* Rating will go here */}
          {/* <CheckCircleIcon /> */}
          <img
            src={process.env.PUBLIC_URL + 'placeholder.png'}
            style={{ width: '25%', height: '100%' }}
          />
        </Box>
      </Grid>
      {/* Beginning of Rating / Certified */}
      <Grid item xs={12}>
        {/* Certified or not */}
      </Grid>
    </Grid>
  );
}

export default ProfileName;
