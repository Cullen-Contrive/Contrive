// Import Libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styling
import { Box, Typography } from '@material-ui/core';

// Import Custom Components
import AllPlannersTable from './AllPlannersTable';
import AllVendorsTable from './AllVendorsTable';

/**
 * Component houses Admin functionality. Tasks that can be
 * accomplished from this page:
 * - Vendors
 *  - Search through table of vendors
 *  - Permanently remove a vendor (and all their associated data)
 *  - Certify a vendor (future)
 *
 * - Planners
 *  - Search through table of planners
 *  - Permanently remove a planner (and all their associated data)
 *  - Certify a planner (future)
 *
 * @returns {jsx} renders the Admin Portal page
 */
function AdminPage() {
  const dispatch = useDispatch();

  // Get all vendors and planners on page load
  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_VENDORS',
    });
  }, []);

  // Render Admin Portal page to the DOM
  return (
    <Box>
      {/* Page Title */}
      <Box mt={3} mb={3}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Admin Portal
        </Typography>
      </Box>

      {/* Vendors Table */}
      <Box mt={5} mb={5}>
        <AllVendorsTable />
      </Box>

      {/* Planners Table */}
      <Box mt={5} mb={5}>
        <AllPlannersTable />
      </Box>
    </Box>
  );
}

export default AdminPage;
