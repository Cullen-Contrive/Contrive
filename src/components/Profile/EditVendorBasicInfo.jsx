import { 
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

function EditVendorBasicInfo({companyName, description}) {

  return(
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h4" align="center" gutterBottom>Upload Photo Goes Here</Typography>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField 
            id="edit-companyName-input"
            helperText="Edit your company's display name."
            label="Company Name"
            type="text"
            variant="outlined" 
            value={companyName} 
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
            value={description} 
            multiline
            rows={4}
          />
        </FormControl>      
      </Grid>
    </Grid>
  );
} // end EditVendorBasicInfo

export default EditVendorBasicInfo;