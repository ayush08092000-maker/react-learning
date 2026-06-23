/**
 * With React.memo:
 * Child re-render is skipped when props are not changed.
 * React reuses previous rendered result.
 */

import { useState } from "react";
import Child2 from "./Child2";


function Parent2() {

    // State change causes only Parent2 to re-render
    const [count, setCount] = useState(0);

    console.log("Parent2 Component Rendered");

    return (
        <div className="root">

            <h1>Count : {count}</h1>

            {/* Updating count state */}
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            {/* Child2 will not re-render because of React.memo */}
            <Child2 />

        </div>
    )
}

export default Parent2;