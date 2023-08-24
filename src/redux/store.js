import {combineReducers, configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    cars: carReducer
})
const store = () => configureStore({
    reducer: rootReducer
})

export {store};