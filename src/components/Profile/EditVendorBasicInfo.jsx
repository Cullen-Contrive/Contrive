import { useDispatch, useSelector } from 'react-redux';

// Material-UI
import { 
  Avatar,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

// custom components
import ImageUpload from '../ImageUpload/ImageUploadFunctional';

function EditVendorBasicInfo({vendor, editProfileElement}) {
  const dispatch = useDispatch();

  return(
    <Grid item container spacing={2} xs={12} justify="center" alignItems="center">
      <Grid item xs={2}>
        <Avatar alt="Your current profile picture." src={vendor.profilePic} />
      </Grid>

      <Grid item xs={8}> 
        <ImageUpload
          page="EditVendorProfilePic"
          editProfileElement={editProfileElement}
          profilePic={vendor.profilePic}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-companyName-input"
            helperText="Edit your company's display name."
            label="Company Name"
            type="text"
            onChange={event => editProfileElement('companyName', event.target.value) }
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
            onChange={event => editProfileElement('description', event.target.value)}
            multiline
            rows={4}
          />
        </FormControl>      
      </Grid>
    
    </Grid>
  );
} // end EditVendorBasicInfo

export default EditVendorBasicInfo;