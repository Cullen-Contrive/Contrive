import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function PublicPhotos() {
  const [expanded, setExpanded] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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

  // Classes for styling
  const classes = useStyles();

  // Event handler for collapsing photos
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography
          style={{
            display: 'inline-block',
          }}
        >
          Public Photos
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography>helloooooooo</Typography>
          {/* {images.map((image, index) => 
            return <PublicPhoto image={image}/>
            )} */}
        </Collapse>
      </Grid>
    </Grid>
  );
}

export default PublicPhotos;
