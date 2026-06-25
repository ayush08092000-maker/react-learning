/**
 * Custom Hook:
 *      Reuse form state and form handling logic.
 */

import { useState } from 'react'


const useForm = (initialValues = {}, onSubmit) => {

    // Store form input values
    const [values, setValues] = useState(initialValues)

    // Handle input change dynamically
    const handleChange = (e) => {
        const {name, value} = e.target

        setValues(prev => ({
            ...prev,
            [name] : value
        }))
    }

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        // Execute submit function if received from component
        if(onSubmit) onSubmit(values)
    }

    // Reset form values
    const resetForm = () => setValues(initialValues)    


    return {
        values,
        handleChange,
        handleSubmit,
        resetForm
    }
}

export default useForm