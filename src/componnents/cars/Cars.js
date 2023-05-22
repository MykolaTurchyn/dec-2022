import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCar} from "../../store";


const Cars = () => {
    const {cars} = useSelector(state => state.car);
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault()
        const brand = e.target.brand.value;
        const car = {id: new Date().getMilliseconds(), brand}
        dispatch(addCar({car}));
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder={'brand'} name={"brand"}/>
                <button>save</button>
            </form>
            {
                cars.map((car) => <div key={car.id}> {car.brand}</div>)
            }
        </div>
    );
};

export default Cars;