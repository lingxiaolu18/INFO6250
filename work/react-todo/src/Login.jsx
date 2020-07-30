import React, {useState} from 'react';
function Login({callLoginService}){
    const [username, setusername] = useState('');
    const handleClick = (e) => {
        callLoginService(username);
        setusername('');
    }
    const handleKeyUp = (e) => {
        setusername(e.target.value);
    }
    return (
        <div className = "login">
            <label>Username:<input onChange = {handleKeyUp} value = {username}/></label>
            <button className = "login-button" onClick = {handleClick}>LOGIN!</button>
        </div>
    )
}


export default Login;