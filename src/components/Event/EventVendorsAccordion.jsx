import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function EventVendorsAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="vendor-types-panel-content"
        id="vendor-types-panel-header"
      >
        <Typography
          style={{
            display: 'inline-block',
          }}
        >
          Recommended Vendors
        </Typography>
      </AccordionSummary>
      {/* Buttons go here */}
      <AccordionDetails>
        <Grid item></Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default EventVendorsAccordion;
