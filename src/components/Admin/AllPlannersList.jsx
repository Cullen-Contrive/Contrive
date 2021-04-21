// Import Libraries
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
import AllPlannersTableRow from './AllPlannersTableRow';

// Header columns for table
const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  /* Column to be added for Planner Certification */
  // { id: 'certified', label: 'Certified', minWidth: 170 },
  { id: 'remove', label: 'Remove', minWidth: 170 },
];

// table styling
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

/**
 * Component displays all planners in a table format listing their:
 * - First Name
 * - Last Name
 *
 * Functionality added to allow an Admin to:
 * - Permanently delete planner (and all their associated data)
 * - Certify a planner (future)
 *
 * @returns {jsx} function renders Planners table
 */
function AllPlannersTable() {
  const classes = useStyles();

  // Grab list of all planners from the Redux store
  const planners = useSelector((store) => store.allVendors);

  // Local state variable for capturing filter input
  const [tableFilter, setTableFilter] = useState('');

  // Local variables for filtering
  let data = [];
  let lowerCaseQuery = tableFilter.toLowerCase();

  // Create array of planners to pass to table for rendering
  // No filter
  if (tableFilter === '') {
    data = planners;
  }
  // Filter input
  else {
    for (let planner of planners) {
      // Grab planners that match filter text on first name
      if (planner.firstName.toLowerCase().includes(lowerCaseQuery)) {
        data.push(planner);
      }
      // Grab planners that match filter text on last name
      else if (planner.lastName.toLowerCase().includes(lowerCaseQuery)) {
        data.push(planner);
      }
    }
  }

  // Render Table to the DOM
  return (
    <Box>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box mt={3} mb={3}>
            <Grid container justify="space-between" alignItems="center">
              {/* Table Titel */}
              <Grid item xs={3}>
                <Typography variant="h4" component="h2" align="left">
                  Planners
                </Typography>
              </Grid>

              {/* Table Filter Input */}
              <Grid item xs={9}>
                <Toolbar>
                  <TextField
                    id="search"
                    color="primary"
                    value={tableFilter}
                    placeholder="First Name / Last Name"
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

          {/* Table */}
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                {/* Header Row */}
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

                {/* Display Planners */}
                <TableBody>
                  {data.map((planner) => {
                    return (
                      <AllPlannersTableRow
                        key={planner.vendorUserId}
                        planner={planner}
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

export default AllPlannersTable;
