import axios from "axios";
import { iserr, isloding, issuccsess } from "./actionType";


export var fetchProduct = (dispatch)=>{
    dispatch({type:isloding})
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            // console.log(res.data);
            dispatch({type:issuccsess,payload:res.data})
        }).catch((err)=>{
            console.log(err);
            dispatch({type:iserr})            
        })
}