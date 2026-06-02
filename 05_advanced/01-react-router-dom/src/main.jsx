import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(

  // Enables routing for entire React application 
  <BrowserRouter>    {/*wraping <App/> by BrowserRouter*/}
      <App />
  </BrowserRouter>
)