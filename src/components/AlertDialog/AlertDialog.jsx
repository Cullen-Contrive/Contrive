// Import Libraries
import React from 'react';

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

/**
 * Component creates a popup box allowing the users to cancel the
 * operation they just implemented or to proceed with the operation
 *
 * @param {string} buttonOne displays the "cancel" button
 * @param {string} buttonTwo displays the "ok / continue" button
 * @param {string} dialogText displays the popup body text
 * @param {string} dialogTitle displays the popup title text
 * @param {function} handleClose sets calling component's local state to false
 * @param {boolean} open calling component's local state to open/close AlertDialog
 * @param {function} proceedAction function/operation to be performed with "ok / continue"
 * @returns {jsx} renders popup on DOM and prompts users for response
 */
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
          {/* Title Text */}
          <Typography variant="h4" component="h2">
            {dialogTitle}
          </Typography>
        </DialogTitle>
      </Box>
      <Box m={3}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Body Text */}
            <Typography variant="body1" component="p">
              {dialogText}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Box>
      <Box m={3}>
        <DialogActions>
          {/* Cancel Button */}
          <Button onClick={handleClose} color="primary">
            {buttonOne}
          </Button>

          {/* OK / Continue Button */}
          <Button onClick={proceedAction} color="primary" autoFocus>
            {buttonTwo}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default AlertDialog;
