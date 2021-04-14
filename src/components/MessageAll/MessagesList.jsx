import { Fragment } from 'react';

import { 
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

import useStyles from './MessageAll.styles.js'

function MessagesList(){
  const classes = useStyles();
  return(
    <>
      <Typography variant="h2">Messages</Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            {/* alt should be name of user that the logged in user is messaging */}
            <Avatar alt="Catherine's Catering" src="http://static.demilked.com/wp-content/uploads/2019/06/5d08f30f841b3-white-house-chef-andre-rush-5d07495ae2959__700.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Catherine's Catering" // primary text will be rendered from reducer
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                {/* This text should be replaced with the last message sent/received */}
                  I can send over a quote if that would be helpful to you.
                </Typography>
              </Fragment>
            }
          />
        </ListItem>

        <Divider variant="middle" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            {/* alt should be name of user that the logged in user is messaging */}
            <Avatar alt="Tom Petty Coverband" src="https://crescentmoonentertainment.com/wp-content/uploads/2017/03/southern-accents-band-pic.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Tom Petty Coverband" // primary text will be rendered from reducer
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                {/* This text should be replaced with the last message sent/received */}
                  We are booked up clear through August.
                </Typography>
              </Fragment>
            }
          />
        </ListItem>

        <Divider variant="middle" component="li" />

                <ListItem alignItems="flex-start">
          <ListItemAvatar>
            {/* alt should be name of user that the logged in user is messaging */}
            <Avatar alt="The Best Magician Ever" src="https://www.careeraddict.com/uploads/article/31169/001magician.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="The Best Magician Ever" // primary text will be rendered from reducer
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                {/* This text should be replaced with the last message sent/received */}
                  I swear it's not just an act! It's truly a site to behold.
                </Typography>
              </Fragment>
            }
          />
        </ListItem>

        <Divider variant="middle" component="li" />
      </List>
    </>
  );
} // end MessagesList

export default MessagesList;