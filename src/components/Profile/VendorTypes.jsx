// This component feeds into VendorProfile and manages
// displaying the Vendor Service Types that the Vendor selected

// Material-UI
import useStyles from './Profile.styles';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Grid, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function VendorTypes({ services }) {
  const classes = useStyles();
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="vendor-types-panel-content"
        id="vendor-types-panel-header"
      >
        <Typography className={classes.inlineBlock}>
          Service Types
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid item>
          <Typography variant="body2">
            {services && services[0] !== null
              ? services.map((service) => {
                return <li key={service.id}>{capitalize(service.name)}</li>;
              })
              : ' '}
          </Typography>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default VendorTypes;
