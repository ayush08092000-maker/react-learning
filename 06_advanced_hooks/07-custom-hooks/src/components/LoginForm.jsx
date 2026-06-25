import React from 'react'
import useForm from '../myHooks/useForm'

const LoginForm = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    // Function passed to custom hook for form submission
    function onSubmit(values) {
        console.log('Form Submitted: ', values)
    }

    // Reusing form logic from custom hook
    const {
        values,
        handleChange,
        handleSubmit,
        resetForm
    } = useForm(initialValues, onSubmit) 


  return (
    <div className='root'>
        <form onSubmit={handleSubmit}>
            <h1 style={{marginLeft: '12px'}}>Login</h1> <br />

            <input 
                type="email"     
                name="email" 
                placeholder='Enter email'
                value={values.email} 
                onChange={handleChange}
            />  <br />

            <input 
                type="password"     
                name="password" 
                placeholder='Enter password'
                value={values.password} 
                onChange={handleChange}
            /> <br />

            <button type='submit'>Submit</button>
            <button type='reset' onClick={resetForm}>Reset</button>

        </form>
    </div>
  )
}

export default LoginForm