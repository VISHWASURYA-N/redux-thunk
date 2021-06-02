import { combineReducers } from "redux";
import themeToggler from "./theme";
import counter from "./counter";
import edamam from "./edamam";

let combineReducer = combineReducers({edamam, themeToggler, counter,});
export default combineReducer;
