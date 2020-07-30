import React, {useState} from 'react';
function SortPane({sortDone, sortNotDone, sortAscending, sortDescending}){
    const [sortMethod, setSortMethod] = useState('');
    const handleOnChange = (e) => {
        setSortMethod(e.target.value);
    }
    const handleClick = () => {
        if(sortMethod === 'Alphabetically Ascending'){
            sortAscending();
        }
        else if(sortMethod === 'Alphabetically Descending'){
            sortDescending();
        }
        else if(sortMethod === 'Done First'){
            sortDone();
        }
        else if(sortMethod === 'Not Done First'){
            sortNotDone();
        }
    }

    return (
        <div>
            <label htmlFor="sort-select">sort by:</label>
            <select onChange = {handleOnChange}>
                <option>--Please choose sort method--</option>
                <option>Alphabetically Ascending</option>
                <option>Alphabetically Descending</option>
                <option>Done First</option>
                <option>Not Done First</option>
            </select>
            <button onClick = {handleClick}>Refresh</button>
        </div>
    )
}
export default SortPane;