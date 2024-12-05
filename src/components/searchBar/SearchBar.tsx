import React, { useState } from "react";
import "./searchBar.css";
import icon from "../../assets/icon.svg";

export default function SearchBar () {
  const [searchInput, setSearchInput] = useState('');
  
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div id="searchBar">
      <input type="text" placeholder="Buscar" onChange={handleChange} value={searchInput}/>
      <button id="search">
        <img src={icon}/>
      </button>
    </div>
  );
}
