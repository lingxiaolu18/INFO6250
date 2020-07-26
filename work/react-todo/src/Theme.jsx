import React, {useState} from 'react';
function Theme({setTheme, callUpdateTheme, userName}){
    // const [value, setValue] = useState('light');
    // const handleClick = (e) => {
    //     console.log(value);
    //     setTheme(value);
    // }
    const handleOnChange = (e)=>{
        console.log(e.target.value);
        setTheme(e.target.value);
        callUpdateTheme(userName, e.target.value);
    }
    return (
        <div>
            <label htmlFor="theme-select">Choose a theme:</label>
            <select onChange={handleOnChange} name="themes" id="theme-select">
                <option value="">--Please choose a theme--</option>
                <option value="colorful">colorful</option>
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
            {/* <button onClick={handleClick}>SUBMIT</button> */}
        </div>
    )
}

export default Theme;