<<<<<<< HEAD
import { useState } from "react";

export default function Conditionalcomponentvariable() {

    const [display, setDisplay] = useState(false);
    let output;

    if (display) {
            output = <h3>The display is true</h3>

    } else {
            output = <h3>The display is false</h3>
    }

    return <div>{output}</div>;
=======
import { useState } from "react";

export default function Conditionalcomponentvariable() {

    const [display, setDisplay] = useState(false);
    let output;

    if (display) {
            output = <h3>The display is true</h3>

    } else {
            output = <h3>The display is false</h3>
    }

    return <div>{output}</div>;
>>>>>>> 2ec342e5402cb757af901a428f17507debd73e92
}