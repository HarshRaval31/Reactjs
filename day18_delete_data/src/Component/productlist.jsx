import React from 'react'

function Productlist({arr, handleD}) {
    console.log(arr)
  return (
    <div id='m'>
       {
        arr.map((el)=>{
            return  <div id='div'> 
            <img src={el.Img} alt="" width={200}/>
            <h2>{el.Title}</h2>
            <p>{el.price}</p>
            <p>{el.des}</p>
            <button onClick={()=>handleD(el.id)}>Delete</button>
            <button>Edit</button>
        </div>
        })
       }    
                
    </div>
  )
}

export default Productlist
