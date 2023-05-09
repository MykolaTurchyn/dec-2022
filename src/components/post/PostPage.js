import {Link, Outlet, useNavigate} from "react-router-dom";

export default function PostPage({post}) {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                {/*<Link to={post.id.toString()}>{post.id} {post.title}</Link>*/}
                {post.id} {post.title}
                <button onClick={() => navigate(post.id.toString())}>post details</button>
            </div>
        </div>
    );
}