import {carService} from "../../services/axios/car.axios.service";

export default function Car({car,setUpdateCar}) {

    const remove = async (id) => {
        await carService.deleteCar(id);
    }
    const update = async (id,car) => {
        let {data} = await carService.updateCar(id, car);
        data && setUpdateCar(data);
    }

    return (
        <div>
            <hr/>
            car_id:{car.id}, <br/>
            car_brand:{car.brand}, <br/>
            car_price:{car.price}, <br/>
            car_year: {car.year} <br/>
            <button onClick={() => remove(car.id)}>Delete</button>
            <button onClick={() => update(car.id,car)}>Update</button>
            <hr/>

        </div>
    );
}