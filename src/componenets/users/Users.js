import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Users = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch({type: "USERS", payload: data }));
    },[])
    return (
        <div>
            {
                store.users && store.users.map((user) =>
                    <div key={user.id}>
                        {user.name}
                    </div>
                )
            }
            <hr/>
        </div>

    );
};

export default Users;