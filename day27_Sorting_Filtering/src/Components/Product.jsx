import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Product = () => {

    var [data,setData] = useState([])
    var [sortData,setSortData] = useState('')
    var [vadharano,setVadharano] = useState([])
    var [filterData,setFilterData] = useState('')
    var [search,setSearch] =useState('')
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((Res)=>{
            console.log(Res);
            setData(Res)
            setVadharano(Res)
        }).catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        var arr = [...data]
        if(sortData == 'hi'){
            arr = arr.sort((a,b)=>a.price - b.price)
        }
        else if(sortData == 'lo'){
            arr = arr.sort((a,b)=>b.price - a.price)
        }
        
        if(filterData){
            arr = arr.filter((el)=>{
                if(el.category == filterData)
                {
                    return el
                }
            })
        }

        if(search){
          arr= arr.filter((el)=>{
                return  el.title.toLowerCase().includes(search.toLowerCase())               
            })
        }

    

        setVadharano(arr)

    },[sortData,filterData,search])
    
    


    return (
        <>
        <div className='top'>
            <select onClick={(e)=>setSortData(e.target.value)} name="" id="">
                <option value="">sorting</option>
                <option value="hi">low to high</option>
                <option value="lo">high to low</option>
            </select>
            <input type="text" placeholder='Serch Product' onChange={(e)=>setSearch(e.target.value)} />
            <select onClick={(e)=>setFilterData(e.target.value)} name="" id="">
                <option value="">category</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
            </select>
        </div>
        <div className='main'>
            {
                vadharano.map((el)=>(
                    <div className='card' key={el.id}>
                        <div className='image'>
                            <img className='img' src={el.image} alt={el.titel} />
                        </div>
                        <div className='text'>
                            <h2>{el.title}</h2>
                            <h3>₹ {el.price}</h3>
                        </div>
                        
                    </div>
                ))
            }
            
        </div>
        </>
    );
}

export default Product;