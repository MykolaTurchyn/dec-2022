import {useForm} from "react-hook-form";
import {carService} from "../services/axios/car.axios.service";

export default function CarForm({updateCar}) {
    let {handleSubmit, reset, register, formState: {errors, isValid}} = useForm({mode: "all"});

    const save = async (car) => {
        await carService.postCar(car)
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"Brand"} {...register('brand', {
                pattern: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                minLength: 1,
                maxLength: 20
            })}/>
            <input type="text" placeholder={"Price"} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={"Year"} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
}