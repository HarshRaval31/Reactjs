import { applyMiddleware, legacy_createStore } from "redux"
import { Productreducer } from "./ProductReducer/reducer"
import { thunk } from "redux-thunk"





  export  let data = legacy_createStore(Productreducer,applyMiddleware(thunk))