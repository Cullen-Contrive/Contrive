// This component feeds into VendorProfile and manages
// Vendor name, certification, rating, and avatar display

// Material-UI
import useStyles from './Profile.styles';
import { Grid, Box, Typography, Avatar } from '@material-ui/core';
// CheckCircleIcon is set up for eventual vendor certification
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import starsImg from '../Images/stars.jpg';

function ProfileName({ name, certified, profilePhoto }) {
  const classes = useStyles();

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
          <Typography variant="h5" className={classes.inlineBlock}>
            {/* Conditionally render name of Vendor here */}
            <strong>
              {name ? name : 'We currently do not have a name for this Vendor.'}
            </strong>
          </Typography>
          {/* {certified ? <CheckCircleIcon /> : 'Not certified'} */}
          <img src={starsImg} style={{ height: '50px' }} />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <center>
          {profilePhoto ? (
            <Avatar className={classes.profilePicAvatarPreview}
              alt={name} src={profilePhoto} />
          ) : (
            <Avatar>A</Avatar>
          )}

        </center>
      </Grid>
    </Grid>
  );
}

export default ProfileName;
