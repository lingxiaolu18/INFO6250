//jshint esversion: 6
import React, {useState, useEffect} from 'react';
import MiddleWare from './MiddleWare';
import Login from './Login';
import Error from './Error';
import './App.css';
import * as services from './services';

function App(){
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const callForLogin = (username) => {
    services.fetchLogIn(username)
    .then((data) => {
      setUsers(data.users)
      setMessages(data.messages)
      setError('')
      setisLoggedIn(true)
    })
    .catch((err)=>{
      setError(err.code);
    });
  }
  const callForSendMessage = (message) => {
    services.sendMessage(message)
    .then((data) => {
      setUsers(data.users);
      setMessages(data.messages);
    })
    .catch((err) => {
      setError(err);
    });
  }

const handleClick = () => {
  services.fetchLogOut()
  .then(() => {
    setisLoggedIn(false);
  })
  .catch((err) => {
    setError(err.code);
  });
}


useEffect(() => {
  services.fetchLoginStatus()
  .then((response) => {
    setisLoggedIn(true);
    callForLogin("existingUser");
  })
  .catch((err) => {
    setisLoggedIn(false);
  });
}, []);

let mainComponent = undefined;
if(isLoggedIn){
  mainComponent = <MiddleWare users = {users} messages = {messages} handleClick = {handleClick} callForSendMessage = {callForSendMessage}/>
}
else{
  mainComponent = <Login callForLogin = {callForLogin}/>
}



return (
  <div className = "App">
    {mainComponent}
    <Error error = {error}/>
  </div>
)}

export default App;
