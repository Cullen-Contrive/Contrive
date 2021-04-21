// This component feeds into VendorProfile to display the Vendor Types that the Vendor selected
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function VendorTypes({ services }) {
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
        <Typography
          style={{
            display: 'inline-block',
          }}
        >
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
