// View to welcome logged-in users
// with information about using Contrive and upcoming events
// Reached by path '/discover'
import React from 'react';

// Images
import img from '../Images/About1.png';
import img1 from '../Images/About2.png';
import img2 from '../Images/About3.png';

import img3 from '../Images/Event1.jpeg';
import img4 from '../Images/Event2.jpeg';
import img5 from '../Images/Event3.png';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    // width: '200px',
    // height: '200px',
    maxWidth: '100%',
    maxHeight: '100%',
    align: 'center',
    padding: theme.spacing(1),
  },
}));

function DiscoverPage() {
  const classes = useStyles();

  return (
    <div>
      <main>
        <Box mt={4} mb={4} align="center" width="100%" className="profileCard">
          <Typography variant="h3">
            <Box align="center" lineHeight={1}>
              Discover Contrive
            </Box>
          </Typography>
        </Box>

        <Box ml={2} align="center" width="100%">
          <Box width="95%">
            <Typography variant="body1">
              <Box align="left" lineHeight={2} fontWeight="fontWeightBold">
                EVENTS NEWS
              </Box>
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={1}>
          <Grid container item xs={4}>
            <img src={img3} className={classes.img} />
          </Grid>
          <Grid container item xs={4}>
            <img src={img4} className={classes.img} />
          </Grid>
          <Grid container item xs={4}>
            <img src={img5} className={classes.img} />
          </Grid>
        </Grid>

        <Box ml={2} mt={4} align="center" width="100%">
          <Box width="95%">
            <Typography variant="body1">
              <Box align="left" lineHeight={2} fontWeight="fontWeightBold">
                WHAT CAN YOU DO?
              </Box>
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={1}>
          <Grid container item xs={4}>
            <img src={img} className={classes.img} />
          </Grid>
          <Grid container item xs={4}>
            <img src={img1} className={classes.img} />
          </Grid>
          <Grid container item xs={4}>
            <img src={img2} className={classes.img} />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default DiscoverPage;
