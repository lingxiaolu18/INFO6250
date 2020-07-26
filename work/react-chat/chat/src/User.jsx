//jshint esversion:6
import React from 'react';
function User({users}){
  return(
    <ul className = "user-list">
      {Object.values(users).map((user, index) => {
        return <li key = {index}>{user.username}</li>
      })}
    </ul>
  )
}


export default User;
