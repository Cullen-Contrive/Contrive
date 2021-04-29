// This is the parent component for all vendor profile components
// reached by path '/vendor/:id'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Material-UI
import useStyles from './Profile.styles';
import { Grid } from '@material-ui/core';

// Custom components
import ProfileName from './ProfileName';
import ProfileNav from './ProfileNav';
import PublicPhotos from './PublicPhotos';
import About from './About';
import SpecialFeatures from './SpecialFeatures';
import VendorTypes from './VendorTypes';

function VendorProfile() {
  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const vendorDetails = useSelector((store) => store.vendor);
  const vendorPhotos = useSelector((store) => store.otherUserDetails);

  // On page load, request Information that will be displayed on the page:
  useEffect(() => {
    fetchVendorDetails();
    fetchVendorPhotos();
  }, []);

  const fetchVendorDetails = () => {
    dispatch({
      type: 'FETCH_SINGLE_VENDOR',
      payload: params.id,
    });
  };

  const fetchVendorPhotos = () => {
    dispatch({
      type: 'FETCH_USER_DETAILS_BY_ID',
      payload: params.id,
    });
  };

  return (
    // pass props to children
    <Grid className={classes.vendorProfileContainer}>
      <ProfileName
        name={vendorDetails.companyName}
        certified={vendorDetails.certified}
        profilePhoto={vendorDetails.profilePic}
      />

      <ProfileNav
        email={vendorDetails.username}
        phone={vendorDetails.phone}
        website={vendorDetails.website}
        address={vendorDetails.address}
        city={vendorDetails.city}
        state={vendorDetails.state}
        zip={vendorDetails.zip}
        vendorId={vendorDetails.vendorUserId}
      />
      <PublicPhotos photos={vendorPhotos.userPhotos} />
      <About
        description={vendorDetails.description}
        additionalInfo={vendorDetails.additionalInfo}
        serviceTypes={vendorDetails.serviceTypes}
        website={vendorDetails.website}
        phone={vendorDetails.phone}
        city={vendorDetails.city}
        state={vendorDetails.state}
      />
      <SpecialFeatures features={vendorDetails.specialFeatures} />
      <VendorTypes services={vendorDetails.serviceTypes} />
    </Grid>
  );
}

export default VendorProfile;
