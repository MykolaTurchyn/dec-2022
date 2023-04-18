import {useEffect, useState} from "react";
import Post from "../post/Post";
import './Posts.css';


export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const lift = (post) => {
        setPost(post);
    }

    return (
        <div className={"mainDiv"}>
            <div className={'post-toggle'}>
                 {
                post &&
                     (<ul>
                         <li>User: {post.userId}</li>
                        <li>ID: {post.id}</li>
                        <li>Title: {post.title}</li>
                        <li>Body: {post.body}</li>
                    </ul>)
                }
            </div>
            <div>
                {
                    posts.map((post) => <Post key={post.id} post={post} lift={lift}/>)
                }
            </div>
        </div>
    );
}