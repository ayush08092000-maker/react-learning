import React from 'react'
// when we submit a form it refresh the page by default. so we need to prevent the form
// from its default action using "preventDefault()" memthod.

const App = () => {

  const submitHandler = (e) => {

    e.preventDefault();   // it prevents the page from refreshing when the form is submitted. by using use event.preventDefault().
  // preventDefault() => is a method that stops the browser's default 
  //                      behavior (page refresh on submit) for an event.

    console.log("form submitted");    
  }

  return (
    <div>
      <form onClick={submitHandler} >
        <input type="text" placeholder='Enter your name' />
        <button>Click Me</button>
      </form>
    </div>
  )
}

export default App