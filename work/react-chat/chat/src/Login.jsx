//jshint esversion:6
import React, {useState} from 'react';
function Login({callForLogin}){
      const [username, setusername] = useState('');
      const handleClick = (e) => {
        callForLogin(username);
      }
      const handleUserTyping = (e) => {
        setusername(e.target.value);
      }
      return(
        <div className = "login">
          <label>Username: <input onKeyUp = {handleUserTyping} /></label>
          <button className = "login-button" onClick = {handleClick}>LOGIN</button>
        </div>
      )
}
export default Login;
