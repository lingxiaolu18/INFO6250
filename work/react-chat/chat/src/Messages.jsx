//jshint esversion: 6
import React from 'react';
import Message from './Message';

function Messages({messages}){
  return (
    <ol className = "messages">
      {messages.map((message, index) => {
        return(
          <Message messages = {message} key = {index}/>
        )
      })}
    </ol>
  )
}



export default Messages;
