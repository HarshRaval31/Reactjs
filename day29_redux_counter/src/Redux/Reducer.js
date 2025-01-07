import { DEC, INC } from "./Actiontype"


let Count = 0

    let Reducer = (state = Count, action)=>{
        switch(action.type){
            case INC :
                return state + action.payload
            case DEC :
                return state - action.payload
            default :
            return state 

    }
}


    export default Reducer