// Import Libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styling
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Import Custom Components
import AllVendorsTableRow from './AllVendorsTableRow';

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

function AllVendorsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_VENDORS',
    });
  }, []);

  const vendors = useSelector((store) => store.allVendors);

  const [tableFilter, setTableFilter] = useState('');

  let data = [];
  let lowerCaseQuery = tableFilter.toLowerCase();

  if (tableFilter === '') {
    data = vendors;
  } else {
    for (let vendor of vendors) {
      if (vendor.companyName.toLowerCase().includes(lowerCaseQuery)) {
        data.push(vendor);
      } else if (vendor.firstName.toLowerCase().includes(lowerCaseQuery)) {
        data.push(vendor);
      } else if (vendor.lastName.toLowerCase().includes(lowerCaseQuery)) {
        data.push(vendor);
      }
    }
  }

  return (
    <Box>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box mt={3} mb={3}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={3}>
                <Typography variant="h4" component="h2" align="left">
                  Vendors
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Toolbar>
                  <TextField
                    id="search"
                    color="primary"
                    value={tableFilter}
                    placeholder="Company Name / First Name / Last Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    onChange={(event) => setTableFilter(event.target.value)}
                  />
                </Toolbar>
              </Grid>
            </Grid>
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
                  {data.map((vendor) => {
                    return (
                      <AllVendorsTableRow
                        key={vendor.vendorUserId}
                        vendor={vendor}
                      />
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

export default AllVendorsTable;
