import { askReducer } from "./ask";
import { combineReducers } from "redux";

export default combineReducers({
	asks: askReducer
});
