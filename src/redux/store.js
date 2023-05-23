import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postReducer, userReducer} from "./slice";


const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,


});

const store =
    configureStore({reducer: rootReducer});

export default store;