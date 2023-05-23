import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const slice = createSlice(
    {
        name: 'postSlice',
        initialState,
        reducers: {
            setPosts: ((state, actions) => {
                const post = actions.payload
                state.posts.push(post)
            })
        }
    });


const {reducer: postReducer, actions} = slice;
const postAction = {...actions};

export {
    postReducer,
    postAction
}