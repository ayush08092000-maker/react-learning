import React, { useState } from 'react'

const App = () => {

  // State variable to store input value
  const [title, setTitle] = useState('ayush')

  // Function runs when form is submitted
  const submitHandler = (e) => {

    e.preventDefault();                       // Prevent page refresh

    console.log("form submitted by", title);  // Print entered value in console

    setTitle("")                              // Clear input field after submit
  }

  return (
    <div>

      <form onSubmit={submitHandler}>      {/* Form submit event */}

        <input
          type="text"
          placeholder='Enter your name'

          value={title}               // Input value connected with state

          // Runs whenever user types
          onChange={(e) => {

            setTitle(e.target.value); // Update state with current input value

          }}
        />

        {/* By default button type = submit */}
        <button>Submit</button>

      </form>

    </div>
  )
}

export default App