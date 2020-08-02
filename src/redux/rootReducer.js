import {combineReducers} from "redux";
import {getEmailReducer} from "./getEmailReducer";

export const rootReducer = combineReducers({
 email: getEmailReducer
});