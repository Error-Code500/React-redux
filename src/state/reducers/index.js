import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({ //not just reducer :) ALL REDUCERS
    account: accountReducer
})

export default reducers;