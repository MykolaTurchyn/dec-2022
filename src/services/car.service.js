import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAllCars: () => axiosService.get(urls.cars),
    addCar: (car) => axiosService.post(urls.cars, car),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`)

}

export {carService};