import React, { useState } from "react";

const StateTutorial3 = () => {

    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setShowText(!showText);
                }}
            >
                Click Here
            </button>

            {showText && <h3>This is a text</h3>}
        </div>
    );
};

export default StateTutorial3;