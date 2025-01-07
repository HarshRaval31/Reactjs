import { legacy_createStore } from "redux";
import Reducer from "./Reducer";


export let harsh = legacy_createStore(Reducer)