//jshint esversion: 6
import React from 'react';
function Logout({handleClick}){
  return(
    <div className = "logout">
      <button className = "logout-button" onClick = {handleClick}>logout</button>
    </div>
  );
}
export default Logout;
