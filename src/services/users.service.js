import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

const UsersService = {
    getAll: () => axiosInstance.get(urls.users),
    getById: (id) => axiosInstance.get(urls.users + "/" + id),

}


export {
    UsersService
};