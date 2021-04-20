// Import Libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Styling
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';

function AlertDialog({
  buttonOne,
  buttonTwo,
  dialogText,
  dialogTitle,
  handleClose,
  open,
  proceedAction,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box m={3}>
        <DialogTitle is="alert-dialog-title">
          <Typography variant="h4" component="h2">
            {dialogTitle}
          </Typography>
        </DialogTitle>
      </Box>
      <Box m={3}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="body1" component="p">
              {dialogText}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Box>
      <Box m={3}>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {buttonOne}
          </Button>
          <Button onClick={proceedAction} color="primary" autoFocus>
            {buttonTwo}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default AlertDialog;
