// This component feeds into VendorProfile and manages
// displaying the Special Features that the Vendor selected

// Material-UI
import useStyles from './Profile.styles';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Grid, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SpecialFeatures({ features }) {
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
        <Typography className={classes.inlineBlock}>
          <strong>Special Features</strong>
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid item>
          <Typography variant="body1">
            {features && features[0] !== null
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
