import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {

    let select = useSelector((st)=>st)
    let Dis = useDispatch()

    function handleINC (){
        Dis({type:'INC', payload : 5})
    }
    function handleDEC (){
        Dis({type:'DEC' , payload : 5})
    }

  return (
    <div>
        <p>Count:{select}</p>
      <center><button onClick={handleINC}>+</button>
        <button onClick={handleDEC}>-</button></center>
    </div>
  )
}

export default Counter