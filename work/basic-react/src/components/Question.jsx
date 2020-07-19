import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function Question(props){
    return(
    <div className = "question">
        <h1>{props.title}</h1>
    </div>);
}

export default Question;