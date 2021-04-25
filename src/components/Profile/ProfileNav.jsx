// This component feeds into VendorProfile and manages
// the vendor-specific navigation that routes to email, phone, address, website and edit

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Material-UI
import useStyles from './Profile.styles';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import EditIcon from '@material-ui/icons/Edit';
import { ButtonGroup, IconButton, Grid } from '@material-ui/core';

function ProfileNav({
  email,
  phone,
  website,
  address,
  city,
  state,
  zip,
  vendorId,
}) {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((store) => store.user)

  const goToEditView = () => {
    // handles going to editView if the
    // logged in user matches the vendorId
    console.log('headed to edit view', vendorId);
    history.push(`/vendor/edit/${vendorId}`);
  };

  const goToMessageView = () => {
    // handles going to messageView for this particular vendor
    // passes the vendorId in as the logged-in user
    history.push(`/message/${vendorId}`);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div className={classes.navContainer}>
          <ButtonGroup className={classes.buttonGroup}>
            <IconButton
              aria-label="email"
              component="a"
              href={`mailto:${email}`}
              target="_blank"
            >
              <EmailIcon />
            </IconButton>
            {user.id !== vendorId && (
              <IconButton
                aria-label="begin a message with this vendor"
                onClick={goToMessageView}
              >
                <MessageIcon />
              </IconButton>
            )}
            <IconButton
              aria-label="start a phone call"
              component="a"
              href={`tel:${phone}`}
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              aria-label="open location on Google Maps"
              component="a"
              href={`https://maps.google.com/?q=${zip} ${city}, ${state}`}
              target="_blank"
            >
              <LocationOnIcon />
            </IconButton>
            { // Only render globe if website exists in user info
              user.website !== null && (
                <IconButton
                  aria-label="open this vendor's website"
                  component="a"
                  href={website}
                  target="_blank"
                >
                  <LanguageIcon />
                </IconButton>)
            }
            {/* Conditionally render this element */}
            {user.id === vendorId && (
              <IconButton aria-label="edit profile" onClick={goToEditView}>
                <EditIcon />
              </IconButton>
            )}
          </ButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProfileNav;
