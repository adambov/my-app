import { render } from "@testing-library/react";
import { useState } from "react";

export default function Conditionalcomponent () {
        const [display, setDisplay] = useState(false);
        if (display) {
            return (
                <div>
                    <h3>The display is true</h3>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>The display is false</h3>
                </div>
            );
        }
}