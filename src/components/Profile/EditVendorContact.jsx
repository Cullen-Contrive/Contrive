import {
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core';

function EditVendorContact({vendor, editProfileElement}) {
  return(
    <Grid item container spacing={2} xs={12}>
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

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-website-input"
            helperText="Edit the website url that you want to direct people to."
            label="Company Website"
            type="text"
            variant="outlined" 
            value={vendor.website} 
            onChange={event => editProfileElement('website', event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-address-input"
            helperText="Edit your company's street address."
            label="Company Address"
            type="text"
            variant="outlined" 
            value={vendor.address} 
            onChange={event => editProfileElement('address', event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-city-input"
            label="City"
            type="text"
            variant="outlined" 
            value={vendor.city} 
            onChange={event => editProfileElement('city', event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-state-input"
            helperText="Please use your state's abbreviation."
            label="State"
            type="text"
            max="2"
            variant="outlined" 
            value={vendor.state} 
            onChange={event => editProfileElement('state', event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-zipcode-input"
            label="Zipcode"
            type="number"
            variant="outlined" 
            value={vendor.zip} 
            onChange={event => editProfileElement('zip', event.target.value)}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
} // end EditVendorContact

export default EditVendorContact;