import React from 'react'

function Productlist({arr, handleD,handelE}) {
    console.log(arr)
  return (
    <div id='m'>
       {
        arr.map((el)=>{
            return  <div id='div' key={el.id}> 
            <img src={el.Img} alt="" width={200}/>
            <h2>{el.Title}</h2>
            <p>{el.price}</p>
            <p>{el.des}</p>
            <button onClick={()=>handleD(el.id)}>Delete</button>
            <button onClick={()=>handelE(el.id)}>Edit</button>
        </div>
        })
       }    
                
    </div>
  )
}

export default Productlist
