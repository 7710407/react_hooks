import React, {useState} from "react";

const StateTutorial = () => {
    const [inputValue, setInputValue] = useState("Pedro");

    let changeText = (event) => {
        const newValue = event.target.value; 
        setInputValue(newValue);
    };

    return (
        <div>
            Hello {inputValue} 
            <input onChange={changeText} placeholder="enter something..." />
        </div>
    );
};

export default StateTutorial;