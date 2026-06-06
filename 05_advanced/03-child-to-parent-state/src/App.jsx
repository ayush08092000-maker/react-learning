// Normally data flows from parent to child through props.
// But by passing the state updater function (setTheme) as a prop,
// child component (Navbar) can update the parent's state (App).

import {React, useState} from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')

  return (
    <div 
       style={{
        backgroundColor: theme === 'Light' ? 'white' : 'black',
        color: theme === 'Light' ? 'black' : 'white',
        minHeight: '100vh'
      }}
    >

      <Navbar theme={theme} setTheme={setTheme} />    

      <h1>Theme is <span>{theme}</span></h1>

    </div>
  )
}

export default App