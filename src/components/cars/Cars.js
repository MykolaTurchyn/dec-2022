import {useEffect, useState} from "react";
import Car from "../car/Car";
import {axiosService} from "../../services/axios/axios.service";
import {carService} from "../../services/axios/car.axios.service";
import CarForm from "../../carForm/CarForm";

export default function Cars() {

    const [cars, setCars] = useState([]);
    let [updateCar, setUpdateCar] = useState(null);


    useEffect(() => {
        carService.getAll().then(({data}) => {
            setCars(data);
        })
    }, [cars]);

    return (
        <div>
            <CarForm updateCar={updateCar}/>

            {
                cars.map((car) => <Car key={car.id} car={car} setUpdateCar={setUpdateCar}/>)
            }
        </div>
    );
}