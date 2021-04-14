import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"22rem", background:"#F2F1F9", border:"1px solid", borderRadius:"7px", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={`Search vendors by name e.g. "Kiki's Delivery Service"`}
     onChange={(i) => setKeyword(i.target.value)}
    />
  );
}

export default SearchBar;