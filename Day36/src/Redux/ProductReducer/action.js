import axios from "axios";
import { iserr, isloading, issuccsess } from "./actiontype";
// import { iserr, isloding, issuccsess } from "./actionType";


export var fetchProduct = (dispatch)=>{
    dispatch({type:isloading})
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            dispatch({type:issuccsess,paylod:res.data})
        }).catch((err)=>{
            console.log(err);
            dispatch({type:iserr})            
        })
}