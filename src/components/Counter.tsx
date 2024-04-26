import React, {useEffect, useState} from "react";
import ButtonCounter from "./ButtonCounter";

export default function Counter(){
    const [counter, setCount] = useState(0)

    const increment = () => setCount(counter + 1)

    useEffect(() => {
        console.log("Value changed " + counter)
    }, [counter]);

    return (
    <div>
        <h2 className="header">Counter</h2>
        <ButtonCounter className="button" onClick={increment}>Increment</ButtonCounter>
        <div className="currCount">
        Current Count: {counter}
        </div>
    </div>
)
}