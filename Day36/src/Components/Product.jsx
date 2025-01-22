import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loading'
import { fetchProduct } from '../Redux/ProductReducer/action'

function Product() {
    let select = useSelector((st)=>st)
      console.log(select);
      
    let dispatch = useDispatch()
    useEffect (()=>{
      dispatch(fetchProduct)
    },[])

    return (<>
      {select.isLoading ? <Loader/> : 
          <div className='cardbox'>
          {select.arr.map((e) => {
          return <div className='cart'> 
              <img src={e.image} alt={e.title} className='photo' />
              <h1>{e.title}</h1>
              <p className='pr'>₹ &nbsp; {e.price}</p>
            </div>
        })}
        </div>
      }
        </>
      );
  }
  
export default Product