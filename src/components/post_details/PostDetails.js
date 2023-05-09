import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PostsAxios} from "../../services/posts.axios";

export default function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    

    useEffect(() => {
        PostsAxios.getById(id.toString()).then(({data}) => setPost(data));
    }, [id]);

    return (
        post && (<div>
            <hr/>
            ID: {post.id} <br/>
            Title: {post.title} <br/>
            Body: {post.body} <br/>
            <hr/>

        </div>)
    );
}