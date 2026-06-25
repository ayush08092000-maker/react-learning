// localStorage => stores data permanently in browser
//                 (data stays after refresh/tab close)

// sessionStorage => stores temporary session data
//                   (data removed after tab close)

// To view storage data:
// Inspect -> Application -> Local/Session Storage

import React from 'react'

const App = () => {


  // Store data in localStorage
  localStorage.setItem("user", "Ayush");
  localStorage.setItem('age', '21');
  localStorage.setItem('course', 'MCA');

  // Get data from localStorage
  const user = localStorage.getItem('user');
  const age = localStorage.getItem("age");
  const course = localStorage.getItem('course')

  // Print data in console
  console.log(`local storage stores data in str format:`);  
  console.log(`user: ${user} \nage: ${age} \ncourse: ${course}`);

  // Remove single/specific item
  // localStorage.removeItem('course');

  // Remove all items
  // localStorage.clear();
                                                                            

// ------------------------- storing object ----------------------------------------------
/* Obj can't be stored directly in localStorage because it stores only strings. 
    1. Use "JSON.stringify()" : to convert obj into str while storing and 
    2. "JSON.parse()" : to convert it back into object while retrieving.      */

  const userObj = {
    name: 'Ayush Dubey',
    age: 22,
    city: 'Prayagraj'
  }

   // Convert object -> string while storing
  localStorage.setItem('userObj', JSON.stringify(userObj)); // JSON.stringify(): obj -> str 

  // Convert string -> object while retrieving
  const userDetail = JSON.parse(localStorage.getItem('userObj')); // JSON.parse(): str -> obj
  
  // Print object in console
  console.log(userDetail);



  return (
    <div>
      <h1>local storage & session storage</h1>
    </div>
  )
}

export default App