import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";

class JsonAxios {
    getAllUsers() {
        return axiosService.get(urls.users);
    }
    getUserById(id) {
        return axiosService.get(urls.users + "/" + id);
    }
    getAllPosts() {
        return axiosService.get(urls.posts);
    }
    getAllComments() {
        return axiosService.get(urls.comments);
    }
}

export const jsonAxios = new JsonAxios();