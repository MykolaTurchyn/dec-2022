import React, {useReducer} from 'react';
import Cat from "../cat/Cat";
import Dog from "../dog/Dog";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            console.log(cat);
            return cat.name ? {...state, cats: [...state.cats, cat]} : state;
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return dog.name ? {...state, dogs: [...state.dogs, dog]} : state;
        case 'DELETE_DOG':
            const dogIdForDelete = action.payload;
            console.log(dogIdForDelete);
            console.log(state.payload);
            console.log(state.dogs);

            const dogFindIndex = state.dogs.findIndex(dog => {
                console.log(dog);
               return dog.id === dogIdForDelete
            });
            // state.dogs.splice(dogFindIndex, 1);
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