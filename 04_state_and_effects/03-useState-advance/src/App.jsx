import React, { useState } from 'react'

const 
App = () => {

  // 1. Object update => --------------------------------------------------------
  const [users, setUsers] = useState({name:"Ayush", Age:22})

  let btn1Clicked = () => {
    // setUsers({Age: 20})   // it will change the whole object.
                             // but I want to update only Age.
    setUsers({...users, Age:20}) //it only update Age, everythings else remain unchange
  }                             //{...users} => create a copy of same obj.(Spread Opr)


  // NOTE POINT....
  // Spread Operator (...users) => is used to expand/copy elem. of arrays and properties of object. 

  // 2. Array update => ----------------------------------------------------------
  const [items, setItems] = useState([10,20,"ram"])

  let btn2Clicked = () => {
    setItems([...items, "30"])
  }

// -----------  3. Previous State (prev) =>   --------------------------------------
  //  we can also use prew instead of Spread Opr(...var)
  const [num, setNum] = useState(0)  
  
  let btn3Clicked = () =>{
    // setNum(num+1) // (o/p = 1) even if there are (num + 1) is written 3 times in these
    // setNum(num+1) // (o/p = 1) three lines but they can increase only onece the value
    // setNum(num+1) // (o/p = 1) of num at a time. 

    // to solve the above problem we use => "Prew" (previous state)
    // prew => it used when new value depends on previous value.
    setNum(prew => prew + 1)  // (o/p = 1)    
    setNum(prew => prew + 1)  // (o/p = 2) 
    setNum(prew => prew + 1)  // (o/p = 3)  // it increase 3 num on each btnClicked
  }

  return (
    <div className='box'>

  {/* 1. Object update => -------------------------------------------------------- */}
      <div className="box1">
        <h1 id='head1'>{users.name} , {users.Age}</h1>
        <button onClick={btn1Clicked}>Click Me</button>
      </div>
  
  {/* 2. Array update => ------------------------------------------------------- */}
      <div className="box2">
        <h1 id='head2'>{items} <br /> {items[0]}, {items[1]}, {items[2]}, {items[3]}</h1>
        <button onClick={btn2Clicked}>Click Me</button>
      </div>
      
  {/* -----------  3. Previous State (prev) =>   -------------------------------- */}
      <div className="box3">
        <h1>{num}</h1>
        <button onClick={btn3Clicked}>Click Me</button>
      </div>
    </div>
  )
}

export default 
App