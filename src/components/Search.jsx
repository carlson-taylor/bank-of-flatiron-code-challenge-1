// export default function Search() {
//     return(

//         <>
//         <input type="text" placeholder="find transaction" />
//         </>
//     )
// }
import React from 'react';
// import  './index.css';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
    class="search"
      type="text"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;