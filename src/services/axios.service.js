import axios from 'axios';
import {baseURL} from "../constants";

let url = {baseURL}
let axiosService = axios.create(url);


export {axiosService};