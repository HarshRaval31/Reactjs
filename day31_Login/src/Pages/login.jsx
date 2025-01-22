import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {

  let [form,setfrom] = useState({
    Email: "",
    Pass: ""
})

const navi = useNavigate()

function handleC (e){
    let {name,value} = e.target
    setfrom({...form, [name] : value})
} 

  console.log(form);
  

function handleS (e){
    e.preventDefault()
    axios.get(`http://localhost:3000/Username?Email=${form.Email}`)
    .then((res) => {
        console.log(res.data)

        if(res.data.length == 1){
          if(res.data[0].Pass == form.Pass){
            alert("Login Success")
            navi("/")
          }
          else{
            alert("Invalid Password")
          }
        }
        else{
          alert("Invalid Email")
        }

         
        })
    .catch((err) => {
        console.log(err)
        })

        
}

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleS}>
            <input type="text" name='Email' placeholder='Enter Email id' onChange={handleC} />
            <input type="text" name='Pass' placeholder='Enter Passworld' onChange={handleC} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login