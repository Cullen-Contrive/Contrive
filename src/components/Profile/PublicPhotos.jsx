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
import { PhotoSizeSelectSmallTwoTone } from '@material-ui/icons';

import placeholderImg from '../Images/placeholder.png';

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

function PublicPhotos({ photos }) {
  const [expanded, setExpanded] = useState(false);

  // Classes for styling
  const classes = useStyles();

  // Event handler for collapsing photos
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion>
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

      <AccordionDetails>
        <Grid container flexDirection="column">
          {/* Use to display images */}
          {/* TODO: Scale images appropriately */}
          {photos ? (
            photos.map((singlePhoto) => {
              return <img key={singlePhoto.id} src={singlePhoto.photo} />;
            })
          ) : (
            <img src={placeholderImg} />
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default PublicPhotos;
