// This component feeds into VendorProfile and manages
// NOT SET UP YET: displaying all public photos the vendor has in the users_photos db

import clsx from 'clsx';

// Material-UI
import useStyles from './Profile.styles'
import {
  Accordion, AccordionDetails, AccordionSummary,
  Grid, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// locally-saved placeholder image used when no photos saved for vendor in users_photos db table
import placeholderImg from '../Images/placeholder.png';

function PublicPhotos({ photos }) {
  // Classes for styling
  const classes = useStyles();


  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="public-photos-panel-content"
        id="public-photos-panel-header"
      >
        <Typography className={classes.inlineBlock}>
          <strong>Public Photos</strong>
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container flexDirection="column">
          {/* Use to display images */}
          {/* TODO: Scale images appropriately */}
          {photos ? (
            photos.map((singlePhoto) => {
              return <img key={singlePhoto.id} src={singlePhoto.photo} />;
            })
          ) : (
            // <img src={placeholderImg} />
            <>
              <img src="https://i.pinimg.com/564x/e5/9c/d5/e59cd5ad3c5d2daada28e14ef13ba7c9.jpg"
                alt="Catered Mac & Cheese" className={classes.publicPhotosTop} />
              <img src="https://messinascatering.com/wp-content/uploads/2019/09/mac-and-cheese-bar-1024x683.jpeg"
                alt="Catered Mac & Cheese" className={classes.publicPhotos} />
              <img src="http://macandcheeseshop.com/wp-content/uploads/2017/11/macs-header-image-catering-1.jpg"
                alt="Catered Mac & Cheese" className={classes.publicPhotos} />
            </>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default PublicPhotos;
