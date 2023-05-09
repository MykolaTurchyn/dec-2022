import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

const PostsAxios = {
    getAll: () => axiosInstance.get(urls.posts),
    getById: (id) => axiosInstance.get(urls.posts + "/" + id),

}
export {
    PostsAxios
}