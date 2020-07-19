import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function Choice(props){
    return (<div className = "choices">
        <input className = "boxes" type = "checkbox" name = "choice" value = {props.id} defaultChecked = {props.checked}/>
        <label className = "single-choice" htmlFor = "choice">{props.choice}</label>
    </div>)
}



export default Choice;