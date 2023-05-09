import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import MainPage from "./components/main/MainPage";
import UsersPage from "./components/users/UsersPage";
import UserDetails from "./components/user_detailes/UserDetails";
import PostsPage from "./components/posts/PostsPage";
import PostDetails from "./components/post_details/PostDetails";
export default function App() {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"main"}>Main</Link></li>
                    <li><Link to={"users"}>Users</Link></li>
                    <li><Link to={"posts"}>Posts</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={"main"} element={<MainPage/>}>

                    </Route>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}></Route>
                    </Route>
                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}></Route>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}