import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
     getAllPosts: () => axiosService.get(urls.posts),
     getPostById: (id) => axiosService.get(urls.posts + id.toString())
 }

export {postService};