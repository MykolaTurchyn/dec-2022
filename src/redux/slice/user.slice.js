import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: []
}
const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: ((state, action) => {
            const user = action.payload;
            state.users.push(user);
        })

    }
});

const {reducer: userReducer, actions} = slice;
const userAction = {...actions};

export {userAction, userReducer};