import counterReducer from "./counter";
import { combineReducers } from "redux";
import courseInfoReducer from "./courseInfo";
import tokenReducer from "./token";
import isloggedReducer from "./islogged";
import userInfoReducer from "./userInfo";

const allReducers = combineReducers({
    counter: counterReducer,
    courseInfo: courseInfoReducer,
    token: tokenReducer,
    islogged: isloggedReducer,
    userInfo: userInfoReducer

});

export default allReducers;