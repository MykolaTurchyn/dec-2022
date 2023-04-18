import "./Post.css"

export default function Post({lift, post, post: {id, title}}) {


    return (
        <div className={"postDiv"}>
            <ul className={'ulList'}>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <button onClick={() => lift(post)}>Click</button>
            </ul>
        </div>
    );
}