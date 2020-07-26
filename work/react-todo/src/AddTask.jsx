import React, {useState} from 'react';
function AddTask({userName, callAddTaskService}){
    const [taskName, setTaskName] = useState('');
    const handleOnChange = (e) => {
        setTaskName(e.target.value);
    }
    const handleClick = (e) => {
        callAddTaskService(userName, taskName);
        setTaskName('');
    }
    return (
        <div>
            <label>New Task:<input onChange = {handleOnChange} value = {taskName}/></label>
            <button onClick = {handleClick}>append</button>
        </div>
    )
}

export default AddTask;