// This component feeds into the VendorProfile page and
// handles all the expanding/collapsing accordions of vendor information

import clsx from 'clsx';

//Material-UI
import useStyles from './Profile.styles';
import {
  Accordion, AccordionSummary,
  AccordionDetails, Grid,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function About({
  description,
  additionalInfo,
  serviceTypes,
  website,
  phone,
  city,
  state,
}) {

  // Classes for styling
  const classes = useStyles();

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="vendor-about-content"
        id="vendor-about-header"
      >
        <Typography
          className={classes.inlineBlock}
        >
          <strong>About</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="body1" component="p">
              {description ? description : 'no description found.'}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="p">
              {additionalInfo ? additionalInfo : 'no information found.'}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <strong>Website</strong>:{' '}
              <span>
                <a href={website}>{website}</a>
              </span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <strong>Phone</strong>:{' '}
              <span>
                <a href={`tel:${phone}`}>{phone}</a>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default About;
