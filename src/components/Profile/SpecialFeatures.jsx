import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function SpecialFeatures({ features }) {
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
