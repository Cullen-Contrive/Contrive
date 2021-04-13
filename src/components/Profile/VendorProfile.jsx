import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContriveHeader from './ContriveHeader';
import ProfileName from './ProfileName';
import ProfileNav from './ProfileNav';
import PublicPhotos from './PublicPhotos';
import About from './About';
import SpecialFeatures from './SpecialFeatures';

function VendorProfile({ id = 2 }) {
  // redux / sagas stuff goes here...
  //
  const dispatch = useDispatch();
  const vendorDetails = useSelector((store) => store.vendor);
  useEffect(() => {
    dispatch({
      type: 'FETCH_SINGLE_VENDOR',
      payload: id,
    });
  }, []);

  return (
    // pass props to children
    <>
      <ContriveHeader />
      <ProfileName vendorDetails={vendorDetails[0]} />
      <ProfileNav />
      <PublicPhotos />
      <About vendorDetails={vendorDetails[0]} />
      <SpecialFeatures vendorDetails={vendorDetails[0]} />
    </>
  );
}

export default VendorProfile;
