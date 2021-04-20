import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import useStyles from './EditVendorProfile.styles';

import EditVendorContact from './EditVendorContact';
import EditVendorBasicInfo from './EditVendorBasicInfo';
import EditVendorServiceTypes from './EditVendorServiceTypes';
import EditVendorSpecialFeatures from './EditVendorSpecialFeatures';

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

  useEffect(() => {
    dispatch({
      type: 'FETCH_SINGLE_VENDOR',
      payload: params.id,
    });
  }, []);

  const editProfileElement = (reducerKey, newKeyValue) => {
    console.log('newKeyValue', newKeyValue)
    dispatch({
      type: 'SET_VENDOR',
      payload: {
        ...vendorDetails,
        [reducerKey]: newKeyValue
      },
    });
  } // end editProfileElement

  const cancelEdit = () => {
    history.push(`/vendor/${vendorDetails.vendorUserId}`)
  } // end cancelEdit

  const saveEdit = () => {
    dispatch({
      type: 'UPDATE_VENDOR_PROFILE',
      payload: {
        data: vendorDetails,
        onComplete: () => {
          cancelEdit();
        },
      },
    })
  } // end saveEdit

  return(
    <>
      <Typography variant="h2" align="center" gutterBottom>Edit Profile</Typography>
      <Grid container spacing={3} direction="column" alignItems="center" className={classes.editFormWrapper}>
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
            <Button color="secondary" onClick={cancelEdit}>Cancel</Button>
            <Button color="primary" onClick={saveEdit}>Save</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
} // end EditVendorProfile

export default EditVendorProfile;