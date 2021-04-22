// Import Libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Styling
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

// Import Custom Components
import AlertDialog from '../AlertDialog/AlertDialog';

/**
 * Component creates a table row for each planner object passed to it
 *
 * The following columns are also included to handle planners:
 * - Remove -> using the DeleteIcon permanently removes the planner (and all
 *   their associated data) from the app
 * - Certify -> checkbox that shows if a planner has been certified by Contrive (future)
 *   - Clicking the checkbox will set the certified status
 *
 * @param {object} planner contains details about a single planner
 * @returns {jsx} renders single table row per planner passed into component
 */
function AllPlannersTableRow({ planner }) {
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

  // Permanently removes planner from the DB
  const deletePlanner = () => {
    const userId = planner.id;

    // Close AlertDialog
    handleClose();

    // Remove Planner from DB
    dispatch({
      type: 'DELETE_PLANNER',
      payload: userId,
    });
  };

  // Renders a single table row per Planner passed
  return (
    <>
      {/* Table Row */}
      <TableRow>
        <TableCell>{planner.firstName}</TableCell>
        <TableCell>{planner.lastName}</TableCell>
        {/* Cell to be add for planner Certification */}
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
          'This action will permanently delete this planner and all their associated data.'
        }
        dialogTitle={'Delete User?'}
        handleClose={handleClose}
        open={open}
        proceedAction={deletePlanner}
      />
    </>
  );
}

export default AllPlannersTableRow;
