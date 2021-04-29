// This is the parent component of all Edit Vendor components
// Reached by path '/vendor/edit/:id'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// Custom Components
import EditVendorContact from './EditVendorContact';
import EditVendorBasicInfo from './EditVendorBasicInfo';
import EditVendorServiceTypes from './EditVendorServiceTypes';
import EditVendorSpecialFeatures from './EditVendorSpecialFeatures';

// Material-UI
import useStyles from './Profile.styles';
import {
  Button,
  ButtonGroup,
  Grid,
  Typography
} from '@material-ui/core';

function EditVendorProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const vendorDetails = useSelector((store) => store.vendor);

  // Request the logged-in vendor's complete information to display 
  // as initial input values, will be stored in vendor reducer
  useEffect(() => {
    dispatch({
      type: 'FETCH_SINGLE_VENDOR',
      payload: params.id,
    });
  }, []);

  // As input values change, update the vendor reducer
  const editProfileElement = (reducerKey, newKeyValue) => {

    dispatch({
      type: 'SET_VENDOR',
      payload: {
        ...vendorDetails,
        [reducerKey]: newKeyValue
      },
    });
  } // end editProfileElement

  const backToProfile = () => {
    history.push(`/vendor/${vendorDetails.vendorUserId}`)
  } // end backToProfile

  // Send vendor reducer will all updated information to permanently update vendor info
  const saveEdit = () => {
    dispatch({
      type: 'UPDATE_VENDOR_PROFILE',
      payload: {
        data: vendorDetails,
        onComplete: () => {
          backToProfile();
        },
      },
    })
  } // end saveEdit

  return (
    <Grid >
      <Typography variant="h2" align="center" gutterBottom>Edit Profile</Typography>
      <Grid container direction="column" alignItems="center"
        spacing={3} className={classes.editFormWrapper}>
        <EditVendorBasicInfo
          vendor={vendorDetails}
          editProfileElement={editProfileElement}
        />
        <EditVendorServiceTypes
          vendor={vendorDetails}
          editProfileElement={editProfileElement}
        />
        <EditVendorContact
          vendor={vendorDetails}
          editProfileElement={editProfileElement}
        />
        <EditVendorSpecialFeatures
          vendor={vendorDetails}
          editProfileElement={editProfileElement}
        />
        <Grid item>
          <ButtonGroup variant="contained">
            <Button color="secondary" onClick={backToProfile}>Cancel</Button>
            <Button color="primary" onClick={saveEdit}>Save</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
} // end EditVendorProfile

export default EditVendorProfile;