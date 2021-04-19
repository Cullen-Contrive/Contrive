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

// function createData(type, companyName, firstName, lastName, certified, remove) {
//   return { type, companyName, firstName, lastName, certified, remove };
// }

// const rows =

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(1, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                          <DeleteIcon color="primary" />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
            {/* <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
          </Paper>
        </Grid>
      </Grid>
      {/* <AllUsersList /> */}
    </Box>
  );
}

export default AdminPage;
