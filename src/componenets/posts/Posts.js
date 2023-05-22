import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Posts = () => {
    const store = useSelector((state) =>state );
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => dispatch({type: "POSTS", payload: data}));
    }, [])
    return (
        <div>
            {
                store.posts && store.posts.map((post) => <div key={post.id}>{post.title} </div>)

            }
        </div>
    );

};

export default Posts;