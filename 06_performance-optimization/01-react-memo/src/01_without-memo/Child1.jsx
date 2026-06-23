import React from 'react'

function Child1() {

    // Runs again on every Parent re-render (without React.memo)
    console.log("Child1 Component Rendered");

    return (
        <>
            <h2>Child1 Component</h2>
        </>
    )
}

export default Child1;