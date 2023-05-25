import axios from 'axios';
import {baseURL} from "../constants/urls";

let url = {baseURL}
let axiosService = axios.create(url);


export {axiosService};
