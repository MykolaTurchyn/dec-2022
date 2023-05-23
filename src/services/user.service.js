import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),

    getUserById: (id) => axiosService.get(urls.users + id.toString())


    //
    // getAllComments: () => axiosService.get(urls.comments)
};


export {userService};