// Import Libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Styling
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

function AlertDialog({
  buttonOne,
  buttonTwo,
  dialogText,
  dialogTitle,
  handleClose,
  proceedAction,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle is="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {buttonOne}
        </Button>
        <Button onClick={proceedAction} color="primary" autoFocus>
          {buttonTwo}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
