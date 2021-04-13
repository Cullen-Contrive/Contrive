import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SearchResultDetails({ vendor }) {
  console.log('====================================');
  console.log('vendor:', vendor);
  console.log('====================================');

  return (
    <div>
      {/* <div>{vendor.companyName}</div> */}
    </div>
  );
}

export default SearchResultDetails;