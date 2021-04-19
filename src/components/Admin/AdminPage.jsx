// Import Libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Custom Components
import AllPlannersList from './AllPlannersList';
import AllUsersList from './AllVendersList';

// Import Styling
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const columns = [
  { id: 'companyName', label: 'Company Name', minWidth: 170 },
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  { id: 'certified', label: 'Certified', minWidth: 170 },
  { id: 'remove', label: 'Remove', minWidth: 170 },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function AdminPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_VENDORS',
    });
  }, []);

  const vendors = useSelector((store) => store.allVendors);

  const deleteVendor = (userId) => {
    console.log('### deleteVendor() ###');
    console.log('\tuserId:', userId);

    dispatch({
      type: 'DELETE_VENDOR',
      payload: userId,
    });
  };

  return (
    <Box>
      <Box mt={3} mb={3}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Admin Portal
        </Typography>
      </Box>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box mt={3} mb={3}>
            <Typography variant="h4" component="h2" align="left">
              Vendors
            </Typography>
          </Box>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ mindWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableHead>
                <TableBody>
                  {vendors.map((vendor) => {
                    return (
                      <TableRow key={vendor.vendorUserId}>
                        <TableCell>{vendor.companyName}</TableCell>
                        <TableCell>{vendor.firstName}</TableCell>
                        <TableCell>{vendor.lastName}</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="left">
                          <DeleteIcon
                            color="primary"
                            onClick={() => deleteVendor(vendor.vendorUserId)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminPage;
