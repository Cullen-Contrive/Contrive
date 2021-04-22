import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function EventNetworkAccordion() {
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
          Vendors in Your Network
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid item>{/* Vendors in Your Network goes here... */}</Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default EventNetworkAccordion;
