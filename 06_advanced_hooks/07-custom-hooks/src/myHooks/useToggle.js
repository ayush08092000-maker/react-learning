/**
 * Custom Hook:
 * Extract reusable stateful logic from components.
 */

import { useState } from "react";


export default function useToggle(initialValue = false){

    // State managed inside custom hook
    const [value, setValue] = useState(initialValue)

    // Reusable toggle logic
    const toggle = () => setValue(prev => !prev)

    return [value, toggle]
}