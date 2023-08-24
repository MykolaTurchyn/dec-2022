import {createSlice} from "@reduxjs/toolkit";

const initialState   = {
    cars: [],
    loading: null,
    trigger: null,

}

createSlice({
    name:'carSlice',
    initialState
})
