import React from 'react'

const Cards = (props) => {           // name of props can be change.

  console.log(props.user, props.age); // Printing on console

  return (
    <div className='card'>
        <img src={props.img}/>  {/*accessing props element(data) from App.jsx */}
        <h1>{props.user}, { props.age}</h1>
        <p>I am a learning reacte with vite for web dev.</p>
        <button>view profile</button>
    </div>
  )
}

export default Cards