import React, {useReducer} from 'react';
import Cat from "../cat/Cat";
import Dog from "../dog/Dog";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            cat.id = state.cats.slice(-1)[0]?.id + 1 || 1;
            return cat.name ? {...state, cats: [...state.cats, cat]} : {...state};
        case 'ADD_DOG':
            const dog = action.payload;
            dog.id = state.dogs.slice(-1)[0]?.id+ 1 || 1;
            return dog.name ? {...state, dogs: [...state.dogs, dog]} : {...state};
        case 'DELETE_CAT':
            const catToDel = action.payload;
            const catFindIndex = state.cats.findIndex(cat => cat.id === catToDel);
            if (catFindIndex !== -1) {
                state.cats.splice(catFindIndex, 1);
            }
            return {...state};
        case 'DELETE_DOG':
            const dogFindIndex = state.dogs.findIndex(dog => dog.id === action.payload);
            if (dogFindIndex !== -1) {
                state.dogs.splice(dogFindIndex, 1);
            }
            return {...state};
        default:
            console.log("default")
            return state;
    }
}
const CatDog = () => {
    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Cat stateDispatch={stateDispatch}/>
            <Dog stateDispatch={stateDispatch}/>
        </div>
    );
};

export default CatDog;