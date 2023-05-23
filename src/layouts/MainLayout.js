import React from 'react';
import Header from "../components/header/Header";
import {Navigate} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <button><Navigate to={'users'}/> users</button>
        </div>
    );
};

export default MainLayout;