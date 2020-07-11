import React, {useState} from 'react';


function Counter(props){
    return <div className = "counter">
        <label>{props.count}</label>
    </div>
}

export default Counter;