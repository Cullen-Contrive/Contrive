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
  const serviceTypes = useSelector(store => store.vendorTypes);


  return(
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="service-types-edit-label">Edit ServiceTypes</InputLabel>
        <Select
          labelId="service-types-edit-label"
          id="service-types-edit"
          multiple
          value={vendor.serviceTypes}
          //onChange={handleFeatureChange}
          input={<Input id="select-multiple-types" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((serviceTypeValue) => (
                <Chip key={serviceTypeValue.id} label={serviceTypeValue.name} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {serviceTypes.map((serviceType, i) => {
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