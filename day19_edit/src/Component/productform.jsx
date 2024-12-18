import React, { useEffect, useState } from 'react'
import Productlist from './productlist'
import { v4 } from 'uuid';


function Product() {
    var [obj, setObj] = useState({
        id: v4(),
        Title : "",
        Price : "",
        des:"",
        Img:""
    })
    var [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])
    var [searchh, setSearchh] = useState("")
 
    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(arr))
    }, [arr])

    function handdelChange(h) {
        var { name, value } = h.target
        setObj({ ...obj, [name]: value })
    }
    
    function send(e) {
        e.preventDefault()
        if(searchh == ""){
            setArr([...arr,{...obj,id :v4()}])
            console.log(arr);
            setObj({
                Title: "",
                Price: "",
                des: "",
                Img: ""
            })
        }
        else{
            let ans = arr.map((el)=>{  
                if(el.id == searchh){
                    return {...el,...obj}
                }
                else {
                    return el
                }
            })
            setArr(ans)
            setSearchh("")
            setObj({
                Title: "",
                Price: "",
                des: "",
                Img: ""
            })
        }
     
    }
       function handleD (h){
         let a = arr.filter((el)=>{
                if(el.id != h){
                    return el
                }
            })
            setArr(a)
        }
        function handelE(eid){
            setSearchh(eid)
            arr.map((el)=>{
                if(el.id == eid){
                    setObj({...obj,...el})
                }
            })
        }

        // function dataEdit(){ 
            
        // }

    return (<>
        <div className='main'>
            <div className="sub">
                <h1>Enter Product Data</h1>
                <form action="" onSubmit={send}>
                    <input type="text" value={obj.Title}  name='Title' placeholder='Enter Product Title' onChange={handdelChange} /> <br />
                    <input type="text" value={obj.Price}  name='Price' placeholder='Enter Product Price' onChange={handdelChange} /> <br />
                    <input type="text" value={obj.des}  name='des' placeholder='Enter Product Description' onChange={handdelChange} /> <br />
                    <input type="text" value={obj.Img}  name='Img' placeholder='Enter Product Imgage URL' onChange={handdelChange} /> <br />
                    <input type="submit" value={searchh == "" ? "submit" : "edit"}  id='send'/>
                    {/* {searchh == "" ?"":<input type="button" id='send' value="edit" onClick={dataEdit} />} */}
                </form>
            </div>
        </div>
        <Productlist arr={arr} handleD={handleD} handelE={handelE} />
      </>
  )
}

export default Product