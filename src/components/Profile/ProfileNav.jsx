import { useHistory } from 'react-router-dom';

import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const history = useHistory();

  const goToEditView = () => {
    console.log('headed to edit view');
    // history.push('/somewhere');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div className={classes.root}>
          <ButtonGroup
            style={{
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              aria-label="email"
              component="a"
              href={`mailto:${email}`}
              target="_blank"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              aria-label="begin a message with this vendor"
              component={Link}
              to={`/message/${vendorId}`}
            >
              <MessageIcon />
            </IconButton>
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
            <IconButton
              aria-label="open this vendor's website"
              component="a"
              href={website}
              target="_blank"
            >
              <LanguageIcon />
            </IconButton>
            {/* Conditionally render this element */}
            <IconButton aria-label="edit profile" onClick={goToEditView}>
              <EditIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProfileNav;
