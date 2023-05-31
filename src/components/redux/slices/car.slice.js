import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../../services/car.service";

const initialState = {cars: []};
const slice = createSlice(
    {
        "name": 'carSlice',
        initialState,
        trigger: null,
        "reducers": {
            setCar: (state, action) => {
                const cars = action.payload
                state.cars.push(...cars);
            },
            removeCar: (state, action) => {
                const carIdToDelete = action.payload;
                carService.deleteCar(carIdToDelete);
            }

        }
    });
export const {reducer: carReducer, actions} = slice;
export const carAction = {...actions};




