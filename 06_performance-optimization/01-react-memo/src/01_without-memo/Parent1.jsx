/**
 * Without React.memo:
 * Parent re-render causes Child re-render
 * even when Child props/state are not changed.
 */

import { useState } from "react";
import Child1 from "./Child1";


function Parent1() {

    // State change causes Parent component to re-render
    const [count, setCount] = useState(0);

    console.log("Parent1 Component Rendered");

    return (
        <div className="root">

            <h1>Count : {count}</h1>

            {/* Updating count state */}
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            
            {/* Child1 re-renders whenever Parent1 re-renders */}
            <Child1 />

        </div>
    )
}

export default Parent1;