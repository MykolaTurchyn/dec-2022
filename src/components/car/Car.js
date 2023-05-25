import {carAction} from "../redux/slices/car.slice";
import {useDispatch} from "react-redux";


const Car = ({car: {id, brand, price, year}}) => {
        const dispatch = useDispatch();
        const removeCar = (id) => {
            dispatch(carAction.removeCar(id))
        }


        return (
            <div>
                ID: {id} <br/>
                Brand:{brand} <br/>
                Price:{price} <br/>
                Year:{year} <br/>
                <button onClick={() => removeCar(id)}>Remove</button>
                <hr/>
            </div>
        );
    }
;

export default Car;