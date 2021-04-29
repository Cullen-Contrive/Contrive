import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function EventVendorsAccordion() {
  // // Dispatch a request on page load for retrieving all vendors
  // useEffect(() => {
  //   dispatch({
  //     type: 'FETCH_ALL_VENDORS',
  //   });
  // }, []);

  // Bring in all vendors to display upon page load:
  let allVendors = useSelector((store) => store.allVendors);
  let someVendors = allVendors.slice(0, 0 + 5);
  function vendors() {
    for (let i = 0; i < 3; i++) {
      return <h1>Hello World</h1>;
    }
  }

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
        {vendors()}
        {/* {allVendors.map(function(eachVendor, i))} */}
        {/* (allVendors.map((eachVendor, i) => {
                      return (
                        <Grid xs={6} className={classes.gridContainer} onClick={() => history.push(`/vendor/${eachVendor.vendorUserId}`)}>
                          <Card className={classes.cardSize}>
                            <Box height='90px' textAlign='center'>
                              <CardContent>
                                <Typography>{eachVendor.companyName}</Typography>
                              </CardContent>
                            </Box>

                            <Box height='100px' alignContent='center'>
                              <CardContent>
                                <img className={classes.imgSize} src={eachVendor.profilePic} alt={eachVendor.companyName} />
                              </CardContent>
                            </Box>
                          </Card>
                        </Grid>
                      );
                    })) */}
      </AccordionDetails>
    </Accordion>
  );
}

export default EventVendorsAccordion;
