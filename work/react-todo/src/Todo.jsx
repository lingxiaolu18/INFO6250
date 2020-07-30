import React, {useState} from 'react';
function Todo({showDoneTasks, tasks, setTasks, handleDone, taskId, title, removeTask, editTask, username}){
    const [task, setTask] = useState(title);
    // const [isDone, setIsDone] = useState(false);
    const handleRemove = () => {
        removeTask(username, taskId);
    };
    const handleEdit = () => {
        editTask(username, taskId, task);
    }
    const handleKeyUp = (e) => {
        setTask(e.target.value);
    }
    const handleOnChange= (e) => {
        console.log(e.target.checked);
        // setIsDone(e.target.checked);
        handleDone(tasks, taskId, setTasks, e.target.checked);
    }
    let isDone = false;
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].taskId === taskId){
            isDone = tasks[i].done;
            break;
        }
    }
    if(!showDoneTasks){
        return (
            <li 
                className = {isDone.toString()}
                key={taskId}
                taskid={taskId}>
                <span><input type="checkbox" onChange = {handleOnChange}></input></span>
                <input onChange = {handleKeyUp} value = {task}></input>
                <span><button onClick = {handleEdit}>EDIT</button></span>
                <span><button onClick = {handleRemove}>REMOVE</button></span>
            </li>
        )
    }
    else{
        return (
            <li 
                key={taskId}
                taskid={taskId}>
                <span><input type="checkbox" onChange = {handleOnChange}></input></span>
                <input onChange = {handleKeyUp} value = {task}></input>
                <span><button onClick = {handleEdit}>EDIT</button></span>
                <span><button onClick = {handleRemove}>REMOVE</button></span>
            </li>
        )
    }
}
export default Todo;