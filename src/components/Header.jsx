import React from "react";
import SearchBar from "./SearchBar";

function Header({setFilter}) {
    return (
        <nav>
        <input 
          type="text" 
          placeholder="Search by city..." 
          onChange={event => setFilter(event.target.value)}
        />
      </nav>
    );
}

export default Header;