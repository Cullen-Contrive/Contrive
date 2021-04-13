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

  console.log('vendorDetails', vendorDetails);

  return (
    // pass props to children
    <>
      <ContriveHeader />
      <ProfileName />
      <ProfileNav />
      <PublicPhotos />
      <About />
      <SpecialFeatures />
    </>
  );
}

export default VendorProfile;
