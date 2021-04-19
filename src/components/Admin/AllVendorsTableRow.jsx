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
  TableCell,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

// Import Custom Components
import AlertDialog from '../AlertDialog/AlertDialog';

function AllVendorsTableRow({ vendor }) {
  const dispatch = useDispatch();

  // Local State variables used for dialog warning
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteVendor = () => {
    console.log('### deleteVendor() ###');

    const userId = vendor.vendorUserId;

    dispatch({
      type: 'DELETE_VENDOR',
      // payload: userId,
      payload: { userId: userId, onComplete: handleClose() },
    });
    handleClose();
  };

  return (
    <>
      <TableRow>
        <TableCell>{vendor.companyName}</TableCell>
        <TableCell>{vendor.firstName}</TableCell>
        <TableCell>{vendor.lastName}</TableCell>
        <TableCell></TableCell>
        <TableCell align="left">
          <DeleteIcon color="primary" onClick={handleClickOpen} />
        </TableCell>
      </TableRow>
      <AlertDialog
        buttonOne={'Cancel'}
        buttonTwo={'Delete'}
        dialogText={'This action will permanently delete this vendor.'}
        dialogTitle={'Delete User?'}
        handleClose={handleClose}
        proceedAction={deleteVendor}
      />
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describeby="altert-dialog-description"
      >
        <DialogTitle is="alert-dialog-title">Delete User?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently remove this vendor from the
            application?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteVendor} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}

export default AllVendorsTableRow;
