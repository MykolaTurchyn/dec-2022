import React, {useReducer} from 'react';
import Cat from "../cat/Cat";
import Dog from "../dog/Dog";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return cat.name ? {...state, cats: [...state.cats, cat]} : state;
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return dog.name ? {...state, dogs: [...state.dogs, dog]} : state;
        case 'DELETE_CAT':
            const catToDel = action.payload.id;
            const catFindIndex = state.cats.findIndex(cat => cat.id === catToDel);
            state.cats.splice(catFindIndex, 1);
            return {...state};
        case 'DELETE_DOG':
            const dogToDel = action.payload.id;
            const dogFindIndex = state.dogs.findIndex(dog => dog.id === dogToDel);
            state.dogs.splice(dogFindIndex, 1);
            return {...state};
        default:
            console.log("default")
            return {...state};

    }
}
const CatDog = () => {
    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div>
            <Cat stateDispatch={stateDispatch}/>
            <Dog stateDispatch={stateDispatch}/>
        </div>
    );
};

export default CatDog;