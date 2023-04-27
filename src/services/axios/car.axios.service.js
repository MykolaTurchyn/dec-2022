import {axiosService} from "./axios.service";
import {urls} from "../../configs/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    postCar: (car) => axiosService.post(urls.cars,car),
    getByID: (id) => axiosService.get(`${urls.cars}/${id}`),
    updateCar: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
};