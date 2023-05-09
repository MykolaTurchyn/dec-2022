import {Link} from "react-router-dom";

export default function UserPage({user}) {

    return (
        <div>

            <Link to={user.id.toString()} state={{...user}} >{user.id} {user.name}</Link>


        </div>
    );
}