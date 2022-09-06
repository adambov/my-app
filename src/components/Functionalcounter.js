import { useState } from "react";

function Functionalcounter() {

        let [counter, setCounter] = useState(0);

        let increment = () => {
            setCounter(counter+1);
        }

        let decrement = () => {
            setCounter(counter-1);
        }

            return (
                <div>
                    <div>Counter is: {counter}</div>
                    <div><button onClick={increment}>Increment</button></div>
                    <div><button onClick={decrement}>Decrement</button></div>
                </div>
            )
}

export default Functionalcounter;