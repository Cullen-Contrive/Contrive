import ContriveHeader from './ContriveHeader';
import ProfileName from './ProfileName';
import ProfileNav from './ProfileNav';
import PublicPhotos from './PublicPhotos';
import About from './About';
import SpecialFeatures from './SpecialFeatures';

function VendorProfile() {
  // redux / sagas stuff goes here...
  //
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
