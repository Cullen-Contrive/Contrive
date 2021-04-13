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

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    //width: '100%',
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

function PublicPhotos() {
  const [expanded, setExpanded] = useState(false);

  // Classes for styling
  const classes = useStyles();

  // Event handler for collapsing photos
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // <Grid container spacing={3} className={classes.root}>
    <div className={classes.root}>
      <Accordion>
        {/* <Grid item xs={12}> */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="public-photos-panel-content"
          id="public-photos-panel-header"
        >
          <Typography
            style={{
              display: 'inline-block',
            }}
          >
            Public Photos
          </Typography>
        </AccordionSummary>
        {/* <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}

        {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <AccordionDetails>
          <Typography>helloooooooo</Typography>
        </AccordionDetails>
        {/* {images.map((image, index) => 
              return <PublicPhoto image={image}/>
              )} */}
        {/* </Collapse> */}
        {/* </Grid> */}
      </Accordion>
    </div>
    // </Grid>
  );
}

export default PublicPhotos;
