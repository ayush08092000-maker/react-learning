/* ❓ Props क्या होते हैं?
👉 Props = data or info भेजना एक component से दूसरे component में
👉 यानी: Parent ➝ Child communication

    Parent = App.jsx
    Child_1 = Cards.jsx  & Child_2 = Props_Destructuring           */


import React from 'react'
import Cards from './Components/Cards';
import Props_Destructuring from './Components/Props_Destructuring';


const App = () => {
  return (
    <div className='parent'>

      <Cards user="Ayush Dubey" age={22} img="https://images.unsplash.com/photo-1773118073884-632bf2c28076?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4OHxobWVudlFoVW14TXx8ZW58MHx8fHx8" /> 
      <Cards user="Rohit" age={30} img="https://images.unsplash.com/photo-1775151462239-03839a32c4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D" /> 
      <Cards user="Abhinav" age={20} img="https://plus.unsplash.com/premium_photo-1774561391246-3701734033f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D" /> 
      <Cards user="Rah Tiwari" age={25} img="https://plus.unsplash.com/premium_photo-1774392166923-d2d1c0a027a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D" /> 
      
      <Props_Destructuring name = "Rahul" followers = "2M followers" />
      <Props_Destructuring name = "Tanu Singh" followers = "20M followers" />

    </div>
  )
}

export default App;