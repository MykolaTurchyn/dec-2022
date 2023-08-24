import {carsApiService} from "./axios.service";
import {urls} from "../constants";
import car from "../components/Car";

const carService = {
    getAll: () => carsApiService.get(urls.cars),
    create: (car) => carsApiService.post(car),
    update: (id) => carsApiService.put(urls.byId(id), car),
    deleteById: (id) => carsApiService.delete(urls.byId(id)),
}

export {carService};