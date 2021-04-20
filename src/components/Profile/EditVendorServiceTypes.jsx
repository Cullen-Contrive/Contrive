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

function EditVendorServiceTypes({vendor, editProfileElement}) {
  const classes = useStyles();
  const vendorTypes = useSelector(store => store.vendorTypes);

  const handleServiceTypeChange = (event) => {
    const serviceTypeIdArray = [];

    event.target.value.map(serviceType => serviceTypeIdArray.push(serviceType.id));

    const duplicateServiceTypeId = serviceTypeIdArray.filter((serviceTypeId, index) => {
      return serviceTypeIdArray.indexOf(serviceTypeId) !== index;
    });

    const updatedIdArray = serviceTypeIdArray.filter(id => id !== duplicateServiceTypeId[0]);

    const serviceTypes = [];
    for (let serviceType of vendorTypes) {
      for (let id of updatedIdArray) {
        if (serviceType.id === id) {
          serviceTypes.push(serviceType);
        }
      }
    }
    console.log('serviceTypes is now:', serviceTypes);

    editProfileElement('serviceTypes', serviceTypes)
  }

  return(
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="service-types-edit-label">Edit ServiceTypes</InputLabel>
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