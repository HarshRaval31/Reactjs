import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/home'
import About from '../Pages/about'
import Product from '../Pages/product'
import Login from '../Pages/login'
import Singin from '../Pages/singin'
import PrivetRouter from '../Comoponent/PrivetRouter'

function Mainrouter() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>    
            <Route path='/About' element={<About/>}></Route>    
            <Route path='/Product' element={
              <PrivetRouter>
              <Product/>
             </PrivetRouter>
              }></Route>    
            <Route path='/Login' element={<Login/>}></Route>    
            <Route path='/Singin' element={<Singin/>}></Route>    
        </Routes>  
    </>
  )
}

export default Mainrouter