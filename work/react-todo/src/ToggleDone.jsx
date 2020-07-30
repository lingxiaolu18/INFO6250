import React, {useState} from 'react';
function ToggleDone({setShowDoneTasks}){
    const [isChecked, setIsChecked] = useState(true);
    const handleOnChange = (e) => {
        // handleToggleDone(showDoneTasks, e.target.checked);
        setIsChecked(e.target.checked);
        setShowDoneTasks(isChecked);
    };
    return (
        <div>
            <label><input type = 'checkbox' onChange = {handleOnChange} checked = {isChecked}></input>Hide Done</label>
        </div>
    )
}


export default ToggleDone;