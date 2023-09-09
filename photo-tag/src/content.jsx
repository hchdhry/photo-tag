import './App.css';
import DropDown from './dropdown';
import React, { useState } from 'react';


function Content() { 
  const [displayDD,toggleDD] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState(null);

  function handleClick(event) {
    toggleDD(prev=>!prev)
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setDropdownPosition({ x, y }); 
  }
 return (
  <div className="content">
    <img
      onClick={handleClick}
      id="wally"
      src="/museum.png"
      alt="Museum"
    />
 
 {displayDD === false ? null : dropdownPosition && <DropDown position={dropdownPosition} />}


  </div>
);
}

export default Content;
