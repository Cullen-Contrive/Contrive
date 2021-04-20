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

  // Handles the change of the feature's selector
  // checks the new array and Sanitizes data so no repeating values are allowed through to server
  const handleFeatureChange = (event) => {
    const featureIdArray = [];
    // loop through our selected objects and make an array of only the ids
    for (let feature of event.target.value) {
      featureIdArray.push(feature.id);
    }
    console.log('featureIdArray', featureIdArray)


    const duplicateFeatureId = featureIdArray.filter((featureId, index) => {
      return featureIdArray.indexOf(featureId) !== index;
    })

    const updatedIdArray = featureIdArray.filter(id => id !== duplicateFeatureId[0]);
    console.log('updatedIdArray', updatedIdArray)

    const specialFeatures = [];
    for (let feature of features) {
      for (let id of updatedIdArray) {
        if (feature.id === id) {
          specialFeatures.push(feature);
        }
      } 
    }

    console.log('specialFeatures', specialFeatures);

    editProfileElement('specialFeatures', specialFeatures);
  }

  return(
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="special-features-edit-label">Edit Special Features</InputLabel>
        <Select
          labelId="special-features-edit-label"
          id="special-features-edit"
          multiple
          value={vendor.specialFeatures}
          // onChange={event => editProfileElement('specialFeatures', event.target.value)}
          onChange={handleFeatureChange}
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