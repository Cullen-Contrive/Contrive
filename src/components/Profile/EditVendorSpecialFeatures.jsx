import { useDispatch, useSelector } from 'react-redux';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';

function EditVendorSpecialFeatures({ editProfileElement, vendor }) {
  const features = useSelector(store => store.features)

  console.log('THESE ARE THE FEATURES', features)
  return(
  <FormControl component="fieldset">
    {features.map((feature, index) => {
      let checked = false;

      for (let specialFeature of vendor.special_features) {
        if (specialFeature.id === feature.id) {
          checked = true; 
        }
      }

      return(
        <FormControlLabel 
          control={<Checkbox value={feature.id} checked={checked} color="primary" onChange={(event) => editProfileElement('special_features', event.target.value)} name="test" />} 
          label={feature.name}
          key={index}
        />
      );
    })}
    <FormControlLabel 
      control={<Checkbox color="primary" checked={true} onChange={(event) => editProfileElement('special_features', event.target.value)} name="test" />} 
      label="test checked"
    />
    <FormControlLabel 
      control={<Checkbox color="primary" checked={false} onChange={() => editProfileElement('')} name="test" />} 
      label="test unchecked"
    />
  </FormControl>
  );
} // end EditVendorSpecialFeatures

export default EditVendorSpecialFeatures;