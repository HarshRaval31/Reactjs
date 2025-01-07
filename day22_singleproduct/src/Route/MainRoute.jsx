import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Product from '../Pages/Product';
import SingalProduct from '../Pages/SingalProduct';
import Cart from '../Pages/Cart';

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/singalproduct' element={<SingalProduct/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='*' element={<h1>Not Found</h1>}></Route>
                
            </Routes>
        </div>
    );
}

export default MainRoute;
