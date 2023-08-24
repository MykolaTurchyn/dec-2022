import axios from 'axios';
import {carsAPI} from "../constants";

let carsApiService = axios.create({baseURL: carsAPI});


export {carsApiService};