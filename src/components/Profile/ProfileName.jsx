import { Grid, Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProfileName() {
  return (
    <Grid container spacing={3}>
      {/* Beginning of Profile Name */}
      <Grid item xs={7}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" style={{ display: 'inline-block' }}>
            {/* Conditionally render name of Vendor here */}
            {/* {vendorDetails.companyName} */}
          </Typography>
          {/* <CheckCircleIcon /> used for certification */}
          {/* Conditionally render image of Vendor here */}
          <img
            src={process.env.PUBLIC_URL + 'stars.jpg'}
            style={{ height: '50px' }}
          />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <center>
          {/* if profilephoto exists render image, else render add image icon */}
          <IconButton size="large">
            <AddAPhotoIcon />
          </IconButton>
          {/* <img
            src={process.env.PUBLIC_URL + 'placeholder.png'}
          /> */}
        </center>
      </Grid>
    </Grid>
  );
}

export default ProfileName;
