import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Singin() {

    let [form,setfrom] = useState({
        Username : "",
        Email: "",
        Pass: ""
    })

    const navi = useNavigate()

    function handleC (e){
        let {name,value} = e.target
        setfrom({...form, [name] : value})
    } 

    function handleS (e){
        e.preventDefault()
        axios.post(`http://localhost:3000/Username`,form)
        .then((res) => {
            console.log(res.data)
            })
        .catch((err) => {
            console.log(err)
            })

            navi("/Login")
    }

  return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={handleS}>
            <input type="text" name='Username' placeholder='Enter Username' onChange={handleC} required />
            <input type="text" name='Email' placeholder='Enter Email id' onChange={handleC} required />
            <input type="text" name='Pass' placeholder='Enter Password' onChange={handleC} required/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Singin