import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import band from "./band"
import genre from "./genre"
import album from "./album"
import user from "./user"


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    band: band,
    genre: genre,
    album: album,
    user: user
  });