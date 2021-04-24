import { useState } from 'react';

import clsx from 'clsx';

//MATERIAL-UI
import useStyles from './Profile.styles';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Collapse, Grid, IconButton, Link,
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
  // const [expanded, setExpanded] = useState(false);

  // Classes for styling
  const classes = useStyles();

  // // Event handler for collapsing photos
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

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
          About
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
              {serviceTypes && !serviceTypes[0] === null
                ? serviceTypes.map((service) => {
                  return <li key={service.id}>{capitalize(service.name)}</li>;
                })
                : ' '}
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
