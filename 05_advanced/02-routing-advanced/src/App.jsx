import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Products from './pages/Products'

import ProductHome from './pages/ProductHome'
import Men from "./pages/collections/Men"
import Women from "./pages/collections/Women"
import Kids from "./pages/collections/Kids"

import Footer from './components/Footer'
import Buttons from './components/Buttons'

import NotFound from './pages/NotFound'
import CourseDetail from './pages/CourseDetail'


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      

      <div className="flex-1">

      {/* Main application routes */}
        <Routes>

          {/* Normal routes */}
          <Route path='/' element={<Home />} />                  
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />

          
          {/* Dynamic route using URL parameter */}
          <Route path='/courses/:id' element={<CourseDetail />} />


          {/* Nested routes */}
          <Route path='/products' element={<Products />} >      

              {/* Default child route for product page */} 
              <Route index element={<ProductHome />} />   

               {/* Child routes render inside Outlet */}
              <Route path='men' element={<Men />} />
              <Route path='women' element={<Women />} />
              <Route path='kids' element={<Kids />} />

          </Route>        


          {/* Handles invalid URLs */}
          <Route path='*' element={<NotFound />} />

        </Routes>

      </div>


      <Buttons />

      <Footer />

    </div>
  )
}

export default App