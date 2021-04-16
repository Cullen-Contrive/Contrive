import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditVendorContact from './EditVendorContact';
import EditVendorBasicInfo from './EditVendorBasicInfo';
import EditVendorSpecialFeatures from './EditVendorSpecialFeatures';

import {Typography} from '@material-ui/core';

function EditVendorProfile() {
  const dispatch = useDispatch();
  const params = useParams();
  const vendorDetails = useSelector((store) => store.vendor);

  useEffect(() => {
    dispatch({
      type: 'FETCH_SINGLE_VENDOR',
      payload: params.id,
    });
  }, []);

  const editProfileElement = (reducerKey, newKeyValue) => {
    dispatch({
      type: 'SET_VENDOR',
      payload: {
        ...vendorDetails,
        [reducerKey]: newKeyValue
      }
    })
  }

  return(
    <>
      <Typography variant="h2" align="center" gutterBottom>Edit Profile</Typography>
      <EditVendorBasicInfo
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
    </>
  );
} // end EditVendorProfile

export default EditVendorProfile;