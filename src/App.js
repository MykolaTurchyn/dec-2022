import style from './App.module.css'
import React from 'react';
import Posts from "./components/posts/Posts";
import UsersPage from "./pages/UsersPage";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <div className={style.Components}>
                <UsersPage/>
                <Posts/>
            </div>
        </div>
    );
};

export default App;