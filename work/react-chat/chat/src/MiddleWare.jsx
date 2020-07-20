//jshint esversion:6
import React from 'react';
import Logout from './Logout';
import Messages from './Messages';
import User from './User';
import OutGoing from './OutGoing';
import './App.css';



function MiddleWare({users, messages, handleClick, callForSendMessage}){
  return (
    <div className = "App">
      Welcome to the ChatRoom my little brother!
      <User users = {users}/>
      <Messages messages = {messages}/>
      <OutGoing callForSendMessage = {callForSendMessage}/>
      <Logout handleClick = {handleClick}/>
    </div>
  )
}

export default MiddleWare;
