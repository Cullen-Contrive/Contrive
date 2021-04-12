import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

function ProfileNav() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

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
            <IconButton aria-label="chat">
              <EmailIcon />
            </IconButton>
            <IconButton aria-label="phone">
              <PhoneIcon />
            </IconButton>
            <IconButton aria-label="location">
              <LocationOnIcon />
            </IconButton>
            <IconButton aria-label="website">
              <LanguageIcon />
            </IconButton>
            {/* Conditionally render this element */}
            <IconButton aria-label="edit profile">
              <EditIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProfileNav;
