import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {id: 1, brand: 'BMW'},
        {id: 2, brand: 'AUDI'},
        {id: 3, brand: 'KIA'},
    ],


};

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        addCar: (state, action) => {
            const car = action.payload.car;
            state.cars.push(car);

        }
    }
});

const carReducer = carSlice.reducer;
export const {addCar} = carSlice.actions;

export default carReducer;