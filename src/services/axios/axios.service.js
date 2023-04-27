import axios from 'axios';
import {baseURL} from "../../configs/urls";

let url = {baseURL}
let axiosService = axios.create(url);


export {axiosService};
