// This component feeds into EditVendorProfile and handles
// Service Type (also called Vendor Type) edit form, 
// inputs are pre-filled with most recent vendor information

import { useSelector } from 'react-redux';

// Material-UI Components
import useStyles from './Profile.styles';
import {
  Chip,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

function EditVendorServiceTypes({ vendor, editProfileElement }) {
  const classes = useStyles();
  const vendorTypes = useSelector(store => store.vendorTypes);

  // Handles the change of the features selector
  // checks the new array and Sanitizes data so no repeating values are allowed through to server
  const handleServiceTypeChange = (event) => {
    const serviceTypeIdArray = [];

    // loop through our selected objects and make an array of only the ids
    event.target.value.map(serviceType => serviceTypeIdArray.push(serviceType.id));

    // creates an array of ids that are duplicated within featureIdArray
    // e.g. serviceTypeIdArray = [1, 2, 1], duplicateServiceTypeId = [1]
    const duplicateServiceTypeId = serviceTypeIdArray.filter((serviceTypeId, index) => {
      return serviceTypeIdArray.indexOf(serviceTypeId) !== index;
    });

    // filter through our array, any duplicate ids should be entirely removed
    // This is how we handle removing items from the selector
    const updatedIdArray = serviceTypeIdArray.filter(id => id !== duplicateServiceTypeId[0]);

    // serviceTypes array will contain all of the service type objects to be added to reducer
    const serviceTypes = [];
    for (let serviceType of vendorTypes) {
      for (let id of updatedIdArray) {
        if (serviceType.id === id) {
          serviceTypes.push(serviceType);
        }
      }
    }
    // console.log('serviceTypes is now:', serviceTypes);
    editProfileElement('serviceTypes', serviceTypes)
  }

  return (
    <Grid item container xs={11} >
      <FormControl fullWidth>
        <InputLabel id="service-types-edit-label">Edit Service Types</InputLabel>
        <Select
          labelId="service-types-edit-label"
          id="service-types-edit"
          multiple
          value={vendor.serviceTypes}
          onChange={handleServiceTypeChange}
          input={<Input id="select-multiple-types" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((serviceTypeValue) => (
                <Chip key={serviceTypeValue.id} label={serviceTypeValue.name} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {vendorTypes.map((serviceType, i) => {
            return (
              <MenuItem key={i} value={serviceType}>
                {serviceType.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
} // EditVendorServiceTypes

export default EditVendorServiceTypes;