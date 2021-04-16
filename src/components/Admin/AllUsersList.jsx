// Import Libraries
import React from 'react';

// Import Styling
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

const columns = [
  { id: 'companyName', label: 'Company Name', minWidth: 170 },
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  { id: 'certified', label: 'Certified', minWidth: 170 },
  { id: 'remove', label: 'Remove', minWidth: 170 },
];

function createData(companyName, firstName, lastName, certified, remove) {
  return { companyName, firstName, lastName, certified, remove };
}

// const rows =

function AllUsersList() {
  return <h1> All Users List </h1>;
}

export default AllUsersList;
