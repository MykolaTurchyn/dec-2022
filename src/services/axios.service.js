import axios from 'axios';
import {baseURL} from "../components/configs/urls";

const url = {baseURL}

const axiosService = axios.create(url);


export {axiosService};