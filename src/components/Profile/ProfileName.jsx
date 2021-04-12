import { Grid, Box, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProfileName() {
  return (
    <Grid container spacing={3}>
      {/* Beginning of Profile Name */}
      <Grid item xs={8}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Typography variant="h5" style={{ display: 'inline-block' }}>
            Catherine's Catering
          </Typography>
          {/* <CheckCircleIcon /> */}
          <img
            src={process.env.PUBLIC_URL + 'stars.jpg'}
            style={{ height: '50px' }}
          />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <center>
          <img src={process.env.PUBLIC_URL + 'placeholder.png'} />
        </center>
      </Grid>
    </Grid>
  );
}

export default ProfileName;
