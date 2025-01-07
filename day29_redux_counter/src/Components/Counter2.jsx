import React from 'react'
import { useSelector } from 'react-redux'

function Counter2() {
    let select = useSelector((st)=>st)
  return (
    <div>
        <p>Count:{select}</p>
    </div>
  )
}

export default Counter2