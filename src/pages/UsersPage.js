import React from 'react';
import Users from "../components/users/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;