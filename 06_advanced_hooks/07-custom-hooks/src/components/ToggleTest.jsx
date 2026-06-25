/**
 * Custom Hook Example:
 * Reuse toggle state logic using useToggle hook.
 */

import React from 'react'
import useToggle from '../myHooks/useToggle'

const ToggleTest = () => {

    // Each useToggle has its own independent state
    const [isOpen, toggleOpen] = useToggle()
    const [isTest, toggleTest] = useToggle()

  return (
    <div className='root'>
        
        <div>
            <button onClick={toggleOpen}>Toggle</button>
            {isOpen && <h3>Hello, this is visible!</h3>}
        </div>

        <div>
            <button onClick={toggleTest}>Toggle Test</button>
            {isTest && <h3>Hello, this is Ayush!</h3>}
        </div>

    </div>
  )
}

export default ToggleTest