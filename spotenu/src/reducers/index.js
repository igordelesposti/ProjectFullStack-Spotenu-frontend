import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import band from "./band"


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    band: band,
    
  });