import {useLocation, useParams} from "react-router-dom";
import {UsersService} from "../../services/users.service";
import {useEffect, useState} from "react";

export default function UserDetails () {

    // // прокинути через стейт url
    // let {state:user} = useLocation();

    // // робити новий запит на сервер
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        UsersService.getById(id).then(({data}) => setUser(data));
    }, [id]);
    return (
        <div>
            <hr/>
            ID:{user.id} <br/>
            Name :{user.name} <br/>
            Email: {user.email} <br/>
            UserName: {user.username} <br/>
            Address: {JSON.stringify(user.address)}
            <hr/>
        </div>
    );
}