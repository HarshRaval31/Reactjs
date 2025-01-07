import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link id='nav' to='/'>Home</Link>
                <Link id='nav' to='/about'>About</Link>
                <Link id='nav' to='/product'>Product</Link>
                <Link id='nav' to='/cart'>Cart</Link>
            </ul>
        </div>
    );
}

export default Navbar;
