import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ContriveHeader from './ContriveHeader';
import ProfileName from './ProfileName';
import ProfileNav from './ProfileNav';
import PublicPhotos from './PublicPhotos';
import About from './About';
import SpecialFeatures from './SpecialFeatures';

function VendorProfile() {
  const params = useParams();
  const dispatch = useDispatch();
  const vendorDetails = useSelector((store) => store.vendor);

  useEffect(() => {
    dispatch({
      type: 'FETCH_SINGLE_VENDOR',
      payload: params.id,
    });
  }, []);

  return (
    // pass props to children
    <>
      <ContriveHeader />
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
      <PublicPhotos />
      <About
        description={vendorDetails.description}
        additionalInfo={vendorDetails.additionalInfo}
        serviceTypes={vendorDetails.service_types}
        website={vendorDetails.website}
        phone={vendorDetails.phone}
        city={vendorDetails.city}
        state={vendorDetails.state}
      />
      <SpecialFeatures features={vendorDetails.special_features} />
    </>
  );
}

export default VendorProfile;
