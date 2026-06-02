/*
React Routing: Routing in React is a process of displaying different components or 
               pages based on the URL path without refreshing the entire web page.

    -> React uses the react-router-dom library to create routing and build Single 
       Page Applications (SPA).

Ex.   /        → Home Component
      /about   → About Component
      /contact → Contact Component
    
----------------------- Steps to Use React Router DOM -----------------------------

1. Install React Router DOM: 
    "npm install react-router-dom"

2. Import Router Components: 
    main.jsx => import { BrowserRouter } from "react-router-dom";
    App.jsx => import { Routes, Route } from "react-router-dom";
                  
3. Wrap App with BrowserRouter : 
    <BrowserRouter>
      <App />
    </BrowserRouter

4. Create Routes: 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

 */

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>

      {/* Common Navbar for all pages */}
      <Navbar />  


      {/* Contains all application routes */}
      <Routes>

        {/* Render component based on URL path */}
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/products' element={<Products />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>

    </div>
  )
}

export default App