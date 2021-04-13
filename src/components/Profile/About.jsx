import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function About({
  description,
  additionalInfo,
  serviceTypes,
  website,
  phone,
  city,
  state,
}) {
  const [expanded, setExpanded] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  // Classes for styling
  const classes = useStyles();

  // Event handler for collapsing photos
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="vendor-about-content"
        id="vendor-about-header"
      >
        <Typography
          style={{
            display: 'inline-block',
          }}
        >
          About
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" component="p">
              {additionalInfo}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body3" component={Link}>
              <strong>Website</strong>: {website}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body3">
              <strong>Phone</strong>: {phone}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body3">
              {serviceTypes.map((service, index) => {
                return <li key={index}>{service}</li>;
              })}
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default About;
