import React from 'react';
import AddTask from './AddTask';

function AddTaskBox({userName, callAddTaskService}){
    return (
        <div>
            <AddTask userName = {userName} callAddTaskService = {callAddTaskService}/>
        </div>
    )
}

export default AddTaskBox;