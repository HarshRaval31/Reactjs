import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Fire'

function Productlist() {

    let [data,setdata] = useState({
        Title : "",
        IMG : ""
    })

    let[id,setid] = useState("")
    let[Arr,setArr] = useState([])

    let user = collection(db,"User")

    async function add() {
       let readd = await getDocs (user)
    //    console.log(readd)
   let HR = readd.docs.map((e)=>{
        return  {id:e.id,...e.data()}
     })
     setArr(HR)                                                            
         
    }
    // console.log(Arr);

    useEffect(()=>{
        add()
    },[])

    function handleC (c) {
            let {value,name} = c.target
            setdata({...data, [name] : value})
    }

    async function handleS  (e){
        e.preventDefault()

         if(id == ""){

        let adddata = await addDoc(user,data)
            alert("Data Added")
            setdata({
                Title:"",
                IMG:""
            })
        }
        else{
            let edit = doc(db,"User",id)

            updateDoc(edit,data)
            alert("Data Updated.....")
            setdata({
                Title:"",
                IMG:""
            })
            setid("")
        }

        add()
    }

    async function handleD(deleteid){
        // console.log(deleteid);
        let Del = doc(db, "User", deleteid)
        await deleteDoc(Del)
        alert("Data Deleted")
        add()
    }

    function handleE(editid){
        Arr.forEach((el)=>{
            if(el.id == editid){
                setdata({
                    Title : el.Title,
                    IMG : el.IMG
                })
            }
        })

        setid(editid)
    }

  return <>
    <div id='main'>
          <h1>Product Form</h1>
        <form onSubmit={handleS}>
         <input type="text" name='Title' value={data.Title} placeholder='Enter Product Name' onChange={handleC}  />
         <input type="text" name='IMG' value={data.IMG} placeholder='Enter Img URL' onChange={handleC} /><br />
         {id == "" ? <input type="submit" value="Submit"/>  :  <input type="submit"  value="Edit"/> }
        </form>
    </div>

        {
            Arr.map((e)=>{
                return <div id='main' key={e.id}>
                    <div id='sub'>
                    <h2>{e.Title}</h2>
                    <img src={e.IMG} alt=""  width={250}/>
                    <div id='D'>
                        <button className='D' onClick={() => handleD(e.id)}>Delete</button>
                        <button className='edit' onClick={() => handleE(e.id)}>Edit</button>
                    </div>

                    </div>
             </div>
                    
                
            })
        }

    </> 
    

}

export default Productlist