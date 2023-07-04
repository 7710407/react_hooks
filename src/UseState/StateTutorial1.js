import React, {useState} from "react";

const StateTutorial1 = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            Hello {counter} 
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default StateTutorial1;