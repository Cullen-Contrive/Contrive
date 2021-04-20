// Import Libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styling
import { Box, Typography } from '@material-ui/core';

// Import Custom Components
import AllPlannersList from './AllPlannersList';
import AllVendorsTable from './AllVendorsTable';

/**
 * Component houses Admin functionality. Tasks that can be
 * accomplished from this page:
 * - Search through table of vendors
 * - Permanently remove a vendor (and all their associated data)
 * - Certify a vendor (future)
 * - Search through table of planners (future)
 * - Permanently remove a planner (and all their associated data) (future)
 * - Certify a vendor (future)
 *
 * @returns {jsx} renders the Admin Portal page
 */
function AdminPage() {
  const dispatch = useDispatch();

  // Get all vendors on page load
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
      <AllVendorsTable />
    </Box>
  );
}

export default AdminPage;
