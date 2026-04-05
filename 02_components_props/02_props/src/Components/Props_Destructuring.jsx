/* ❌ Old तरीका (तुमने अभी सीखा)
        function Hello(props) {
        return <h1>Hello {props.name}</h1>;
        }
 👉 बार-बार props.name लिखना पड़ता है 😅           */

// ************** Props Destructuring (Modern Way🔥) **************
//                  { name } = props.name

import React from 'react'

const Props_Destructuring = ({name, followers}) => {
  return (
    <div className='dest'>
      <h1>Props_Destructuring</h1>
      <h2>{name}, {followers}</h2>
      <p>Here I learn how to use props in Modern way calls Props Destructuring.</p>
      <button>view profile</button>
    </div>
  )
}

export default Props_Destructuring;



