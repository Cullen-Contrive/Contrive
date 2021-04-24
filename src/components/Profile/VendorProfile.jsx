// This is the parent component for all vendor profile components
// reached by path '/vendor/:id'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
  const vendorDetails = useSelector((store) => store.vendor);
  const vendorPhotos = useSelector((store) => store.otherUserDetails);

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
    <>
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
    </>
  );
}

export default VendorProfile;
