import { useState } from "react";

export default function Ternarycomponent() {

    const [display, setDisplay] = useState(false);

    return display ? (
        <div><h3>This component is true</h3></div>
    ) : (
        <div><h3>This component is false</h3></div>
    );
    
}