import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {userAction} from "../../redux";
import User from "../user/User";

const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => {
            dispatch(userAction.setUsers(data))
        });
    }, []);
    return (
        <div>
            <h3>Users</h3>

            {
                users.map((user) => user.map(user => <User key={user.id} user={user}/>))
            }
        </div>
    );
};

export default Users;