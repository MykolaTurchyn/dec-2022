import {useEffect, useState} from "react";
import {UsersService} from "../../services/users.service";
import UserPage from "../user/UserPage";
import {Outlet} from "react-router-dom";

export default function UsersPage() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        UsersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (<div>
            <div>
                {
                    users.map((user) => <UserPage key={user.id} user={user}/>)
                }
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}