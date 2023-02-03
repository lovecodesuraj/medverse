import { combineReducers } from "redux";
import questions from "./questions"
import auth from "./auth";
import users from "./users"

export default combineReducers({
   questions,
   auth,
   users
})