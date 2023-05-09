import {useEffect, useState} from "react";
import {PostsAxios} from "../../services/posts.axios";
import PostPage from "../post/PostPage";
import {Outlet} from "react-router-dom";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostsAxios.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            <div>
                <Outlet/>

            </div>


            <div>
                {
                    posts.map((post) => <PostPage key={post.id} post={post}/>)

                }
            </div>
        </div>
    );
}