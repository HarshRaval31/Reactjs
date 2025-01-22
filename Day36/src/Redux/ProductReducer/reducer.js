// import { isLoading, isSuccsess, isErr, issuccsess, iserr } from "./actiontype"

import { iserr, isloading, issuccsess } from "./actiontype"

let name ={
    isLoading : false,
    isSuccsess : false,
    isErr : false,
    arr : []
}

export let Productreducer = (state = name ,{type,paylod})=>{

        switch(type){
            case isloading :
                return {...state,isLoading : true}

            case issuccsess :
                return{...state, isLoading : false, isSuccsess : true , arr: paylod}

            case iserr :
                return{...state, isLoading : false, isErr : true }

             default:
                    return state
        }

}