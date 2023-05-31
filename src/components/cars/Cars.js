import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services/car.service";
import {carAction} from "../redux/slices/car.slice";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector((state) => state.cars);
    useEffect(() => {
        carService.getAllCars().then(({data}) => {
            dispatch(carAction.setCar(data));
        })
    }, [dispatch]);

    return (
        <div>
            <CarForm/>
            <hr/>

            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;