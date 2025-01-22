import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Product'}>Product</Link>
        <Link to={'/Login'}>Login</Link>
        <Link to={'/Singin'}>Singin</Link>
    </div>
  )
}

export default Navbar