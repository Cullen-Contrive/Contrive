import { useDispatch, useSelector } from 'react-redux';
import useStyles from './EditVendorProfile.styles';

import {
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';


function EditVendorSpecialFeatures({ editProfileElement, vendor }) {
  const classes = useStyles();
  const features = useSelector(store => store.features)
  
  console.log('THESE ARE THE FEATURES', features)
  return(
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="special-features-edit-label">Edit Special Features</InputLabel>
        <Select
          labelId="special-features-edit-label"
          id="special-features-edit"
          multiple
          name="Edit Special Features"
          value={vendor.specialFeatures}
          onChange={event => editProfileElement('specialFeatures', event.target.value) }
          input={<Input id="select-multiple-features" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((featureValue) => (
                <Chip key={featureValue.id} label={featureValue.name} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {features.map((feature, i) => {
            return (
              <MenuItem key={i} value={feature}>
                {feature.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
} // end EditVendorSpecialFeatures

export default EditVendorSpecialFeatures;