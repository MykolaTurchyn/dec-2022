import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postService} from "../../services/post.service";
import {postAction} from "../../redux";
import Post from "../post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector((state) => state.posts);

    useEffect(() => {
        postService.getAllPosts().then(({data}) =>
            dispatch(postAction.setPosts(data)));
    }, [dispatch])
    return (
        <div>
            <h3>Posts</h3>
            {posts.map(post => post.map(post => <Post key={post.id} post={post}/>))}
        </div>
    );
};

export default Posts;