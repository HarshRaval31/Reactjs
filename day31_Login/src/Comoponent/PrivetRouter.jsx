import React from 'react'
import { Navigate } from 'react-router'

function PrivetRouter({children}) {
  return (
    <div>
        {true ? children : <Navigate to={"/Login"}/>}
    </div>
  )
}

export default PrivetRouter