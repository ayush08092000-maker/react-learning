import React from 'react'

function Child2() {

    // Runs only when Child2 props change
    console.log("Child2 Component Rendered");

    return (
        <>
            <h2>Child2 Component</h2>
        </>
    )
}

// React.memo memoizes component and prevents unnecessary re-renders
export default React.memo(Child2);