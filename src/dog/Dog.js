import React from 'react';
import {useForm} from "react-hook-form";

const Dog = ({stateDispatch: [{dogs}, dispatch]}) => {

    const {register, reset, handleSubmit} = useForm({mode: "all"});

    const saveDog = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog});
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={"Dog"} {...register('name')}/>
                <button>Add Dog</button>
            </form>
            <div>
                {dogs && dogs.map(dog => <div key={dog.id}>
                    Id: {dog.id} <br/>
                    Name: {dog.name} <br/>
                    <button onClick={() => dispatch({type: 'DELETE_DOG'})}>Delete</button>



                </div>)}
            </div>
        </div>
    );
};

export default Dog;