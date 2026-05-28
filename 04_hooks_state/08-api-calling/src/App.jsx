// APIs => fetching or sending data between your frontend and a backend 
//         server (like a REST API). The most common way is using fetch() or 
//         libraries like Axios.



import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const App = () => {

  // ------------------------------ using fetch() ---------------------------------

  const getData = async () => {   // async: makes a function asynchronous.

    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                  // await: waits for a Promise to finish.

    //Response = the complete reply from the server.(multi attribute)
    // console.log(responce); 

    // Data = the actual useful information inside the response
    const data = await responce.json() //API JSON response into usable JS data(like obj or arr)
    
    console.log(data);    
        
  }

// ------------------------------ using Axios() ---------------------------------

    const getData2 = async () => {

      const responce = await axios.get('https://picsum.photos/v2/list')

      // console.log(responce2); //JSON format

      // axios has simpler syntax than fetch
      console.log(responce.data); // json => uable data (object)  
      
    }
    
// -------------------- alternative method (destructuring) ---------------------------------

    const [arr, setArr] = useState([]) // helps for actual use in UI

    const getingData = async () => {

      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

      // console.log(responce2); //JSON format

      // axios has simpler syntax than fetch
      console.log(data); // json => uable data (object)   
      
      // responce of API (set of data) is stored in array.
      setArr(data) 
            
    }

    
  return (
    <div>
      <h1>API Calling</h1>

      <button onClick={getData} >fetch1</button>

      <button onClick={getData2} >Axios2</button>
  
      <button onClick={getingData} >Axios3</button>
      <div className='box'>
        {arr.map((elem, idx) => {
          return <h3>{idx} Hollo, {elem.name} </h3>
        })}
      </div>

    </div>
  )
}

export default App