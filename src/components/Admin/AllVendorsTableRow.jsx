// Import Libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// Import Styling
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function AllVendorsTableRow({ vendor }) {
  const dispatch = useDispatch();

  const deleteVendor = () => {
    console.log('### deleteVendor() ###');

    const userId = vendor.vendorUserId;

    dispatch({
      type: 'DELETE_VENDOR',
      payload: userId,
    });
  };

  return (
    <TableRow>
      <TableCell>{vendor.companyName}</TableCell>
      <TableCell>{vendor.firstName}</TableCell>
      <TableCell>{vendor.lastName}</TableCell>
      <TableCell></TableCell>
      <TableCell align="left">
        <DeleteIcon color="primary" onClick={deleteVendor} />
      </TableCell>
    </TableRow>
  );
}

export default AllVendorsTableRow;
