import { memo } from 'react'

const Child = ({user}) => {

    // Runs only when user prop reference changes
    console.log('Child rendered...');
    
    return (
        <div>
            <h2>Child component</h2>
            <h3>Name: {user.name}, Age: {user.age}</h3>
        </div>
    )
}

// memo (React.memo) prevents unnecessary re-renders when props are unchanged
export default memo(Child)      

/**
 * NOTE:
 *   memo is the named import version of React.memo.
 *      React.memo => import React from 'react'
 *      memo       => import { memo } from 'react'
 */
