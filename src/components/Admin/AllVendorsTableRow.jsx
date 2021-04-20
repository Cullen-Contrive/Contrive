// Import Libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Styling
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

// Import Custom Components
import AlertDialog from '../AlertDialog/AlertDialog';

/**
 * Component creates a table row for each vendor object passed to it
 *
 * The following columns are also included to handle vendors:
 * - Remove -> using the DeleteIcon permanently removes the vendor (and all
 *   their associated data) from the app
 * - Certify -> checkbox that shows if a vendor has been certified by Contrive (future)
 *   - Clicking the checkbox will set the certified status
 *
 * @param {object} vendor contains details about a single vendor
 * @returns {jsx} renders single table row per vendor passed into component
 */
function AllVendorsTableRow({ vendor }) {
  const dispatch = useDispatch();

  // Local State variables used for dialog warning
  const [open, setOpen] = useState(false);

  // Helper function for AlertDialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Helper function for AlertDialog
  const handleClose = () => {
    setOpen(false);
  };

  // Permanently removes vendor from the DB
  const deleteVendor = () => {
    const userId = vendor.vendorUserId;

    // Close AlertDialog
    handleClose();

    // Remove vendor from DB
    dispatch({
      type: 'DELETE_VENDOR',
      payload: userId,
    });
  };

  // Renders a single table row per vendor passed
  return (
    <>
      {/* Table Row */}
      <TableRow>
        <TableCell>{vendor.companyName}</TableCell>
        <TableCell>{vendor.firstName}</TableCell>
        <TableCell>{vendor.lastName}</TableCell>
        {/* Cell to be add for Vendor Certification */}
        {/* <TableCell></TableCell> */}
        <TableCell align="left">
          <DeleteIcon color="primary" onClick={handleClickOpen} />
        </TableCell>
      </TableRow>

      {/* Call AlertDialog when DeleteIcon is pressed */}
      <AlertDialog
        buttonOne={'Cancel'}
        buttonTwo={'Delete'}
        dialogText={
          'This action will permanently delete this vendor and all their associated data.'
        }
        dialogTitle={'Delete User?'}
        handleClose={handleClose}
        open={open}
        proceedAction={deleteVendor}
      />
    </>
  );
}

export default AllVendorsTableRow;
