import { useDispatch, useSelector } from 'react-redux';
import useStyles from './Profile.styles';

// Material-UI
import {
  Avatar,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

// custom components
import ImageUpload from '../ImageUpload/ImageUpload';

function EditVendorBasicInfo({ vendor, editProfileElement }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid
      item
      container
      spacing={3}
      xs={12}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={3.5}>
        <Avatar
          alt="Your current profile picture."
          src={vendor.profilePic}
          className={classes.profilePicAvatarPreview}
        />
      </Grid>

      <Grid item xs={8}>
        <ImageUpload
          page="EditVendorProfilePic"
          editProfileElement={editProfileElement}
          profilePic={vendor.profilePic}
        />
      </Grid>

      <Grid item xs={12} gutterBottom>
        <Typography variant="body1">
          The image on the left is how your profile picture is displayed to
          others. Click within the dotted lines to upload an image.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="edit-companyName-input"
            helperText="Edit your company's display name."
            label="Company Name"
            type="text"
            onChange={(event) =>
              editProfileElement('companyName', event.target.value)
            }
            variant="outlined"
            value={vendor.companyName}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="edit-companyName-input"
            helperText="Edit your company's description."
            label="Company Description"
            type="text"
            variant="outlined"
            value={vendor.description}
            onChange={(event) =>
              editProfileElement('description', event.target.value)
            }
            multiline
            rows={4}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
} // end EditVendorBasicInfo

export default EditVendorBasicInfo;
