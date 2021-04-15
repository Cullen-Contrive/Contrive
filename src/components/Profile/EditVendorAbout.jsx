import {
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core';

function EditVendorAbout({vendor, editProfileElement}) {
  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <FormControl fullWidth>
          <TextField 
            id="edit-phone-input"
            helperText="Your number should look like: 123-456-7890."
            label="Company Phone Number"
            type="tel"
            variant="outlined" 
            value={vendor.phone} 
            onChange={event => editProfileElement('phone', event.target.value)}
          />
        </FormControl> 
      </Grid>
    </Grid>
  )
} // end EditVendorAbout

export default EditVendorAbout;