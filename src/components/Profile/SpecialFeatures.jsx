import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function SpecialFeatures({ features }) {
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

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="special-features-panel-content"
        id="special-features-panel-header"
      >
        <Typography
          style={{
            display: 'inline-block',
          }}
        >
          Special Features
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid item>
          <Typography variant="body2">
            {features
              ? features.map((feature) => {
                  return <li key={feature.id}>{capitalize(feature.name)}</li>;
                })
              : ' '}
          </Typography>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default SpecialFeatures;
