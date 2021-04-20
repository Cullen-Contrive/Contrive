import { useSelector } from 'react-redux';
import useStyles from './EditVendorProfile.styles';

// Material-UI Components
import {
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

function EditVendorSpecialFeatures({ editProfileElement, vendor }) {
  const classes = useStyles();
  const features = useSelector(store => store.features)

  // Handles the change of the features selector
  // checks the new array and Sanitizes data so no repeating values are allowed through to server
  const handleFeatureChange = (event) => {
    const featureIdArray = [];

    // loop through our selected objects and make an array of only the ids
    event.target.value.map(feature => featureIdArray.push(feature.id))
    // console.log('featureIdArray', featureIdArray)

    // creates an array of ids that are duplicated within featureIdArray
    // e.g. featureIdArray = [1, 2, 1], duplicateFeatureId = [1]
    const duplicateFeatureId = featureIdArray.filter((featureId, index) => {
      return featureIdArray.indexOf(featureId) !== index;
    })

    // filter through our array, any duplicate ids should be entirely removed
    // This is how we handle removing items from the selector
    const updatedIdArray = featureIdArray.filter(id => id !== duplicateFeatureId[0]);
    // console.log('updatedIdArray', updatedIdArray)

    // specialFeatures array will contain all of the feature objects to be added to reducer
    const specialFeatures = [];
    for (let feature of features) {
      for (let id of updatedIdArray) {
        if (feature.id === id) {
          specialFeatures.push(feature);
        }
      } 
    }
    // console.log('specialFeatures', specialFeatures);

    editProfileElement('specialFeatures', specialFeatures);
  }

  return(
    <Grid item container xs={11}>
      <FormControl fullWidth>
        <InputLabel id="special-features-edit-label">Edit Special Features</InputLabel>
        <Select
          labelId="special-features-edit-label"
          id="special-features-edit"
          multiple
          value={vendor.specialFeatures}
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