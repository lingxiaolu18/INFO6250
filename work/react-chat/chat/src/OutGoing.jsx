//jshint esversion:6
import React, {useState} from 'react';
function OutGoing({callForSendMessage}){
  const [text, setText] = useState('');
  const handleUserTyping = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    callForSendMessage(text);
    setText('');
  };
  return (
    <div className = "send-message">
      <input className = "new-message" onKeyUp = {handleUserTyping}></input>
      <button type = "submit" onClick = {handleClick}>enter</button>
    </div>
  );
}
export default OutGoing;
