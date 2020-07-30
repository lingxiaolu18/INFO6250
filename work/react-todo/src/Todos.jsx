import React from 'react';
import Todo from './Todo';
function Todos({showDoneTasks, setTasks, handleDone, removeTask, editTask, username, tasks}){
    
    // if(showDoneTasks){
        return (
            <div>
                <ul>
                {tasks.map(currTask => (
                    <Todo
                        showDoneTasks = {showDoneTasks}
                        tasks = {tasks}
                        setTasks = {setTasks}
                        handleDone = {handleDone}
                        removeTask = {removeTask}
                        editTask = {editTask}
                        key={currTask.taskId}
                        username = {username}
                        taskId = {currTask.taskId}
                        title = {currTask.task}
                    />
                ))}
                </ul>
            </div>
        )
    // }
    // else{
    //     const temp = [];
    //     for(let i = 0; i < tasks.length; i++){
    //         if(!tasks[i].done){
    //             temp.push(tasks[i]);
    //         }
    //     }
    //     return (
    //         <div>
    //             <ul>
    //             {temp.map(currTask => (
    //                 <Todo
    //                     tasks = {tasks}
    //                     setTasks = {setTasks}
    //                     handleDone = {handleDone}
    //                     removeTask = {removeTask}
    //                     editTask = {editTask}
    //                     key={currTask.taskId}
    //                     username = {username}
    //                     taskId = {currTask.taskId}
    //                     title = {currTask.task}
    //                 />
    //             ))}
    //             </ul>
    //         </div>
    //     )
    // }
}
export default Todos;