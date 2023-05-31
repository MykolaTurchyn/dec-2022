import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {carAction} from "../redux/slices/car.slice";

const CarForm = () => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm();

    const submit = (car) => {
        carService.addCar(car).then(newCar => carAction.setCar(newCar));
        reset()

    };
    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={"Brand"} {...register('brand',
                {maxLength: 20, minLength: 2})}/>
            {errors.brand && <span> minLength - 2 ,maxLength -20</span>}

            <input type="number" placeholder={"Price"} {...register('price',
                {
                    valueAsNumber: true,
                    max: 1000000,
                    min: 0
                })}/>
            {errors.price && <span> minPrice - 0 ,maxPrice -1000000</span>}

            <input type="number" placeholder={"Year"} {...register('year',
                {
                    valueAsNumber: true,
                    min: 1990,
                    max: 2023
                })}/>
            {errors.year && <span> minData - 1990 ,maxData - {new Date().getFullYear()}</span>}


            <button>Add Car</button>
        </form>
    );
};

export default CarForm;