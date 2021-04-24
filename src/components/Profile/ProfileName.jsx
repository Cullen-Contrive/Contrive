
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './Profile.styles';
import { Grid, Box, Typography, Avatar } from '@material-ui/core';

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
          <Typography variant="h5" style={{ display: 'inline-block' }}>
            {/* Conditionally render name of Vendor here */}
            {name ? name : 'Name goes here..'}
          </Typography>
          {/* {certified ? <CheckCircleIcon /> : 'Not certified'} */}
          <img src={starsImg} style={{ height: '50px' }} />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <center>
          {profilePhoto ? (
            <Avatar className={classes.profilePicAvatarPreview} alt={name} src={profilePhoto} />
          ) : (
            <Avatar>A</Avatar>
          )}

          {/* <IconButton size="large">
            <AddAPhotoIcon />
          </IconButton> */}
        </center>
      </Grid>
    </Grid>
  );
}

export default ProfileName;
