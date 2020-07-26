//jshint esversion:6
import React from 'react';
function Message({messages}){
  return (
    <li>
    <div className ="messages">
      <div className ="meta-info">
        <div className ="sender-info">
          <span className="username">{messages.sender}</span>
        </div>
        <div className ="message-info">
          <span className ="timestamp">{messages.timestamp}</span>
        </div>
      </div>
      <p className="message-text">{messages.text}</p>
    </div>
    </li>
  )
}


export default Message;
