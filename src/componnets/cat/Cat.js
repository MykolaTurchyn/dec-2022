import React from 'react';
import {useForm} from "react-hook-form";

const Cat = ({stateDispatch: [{cats}, dispatch]}) => {
    const {register, handleSubmit, reset} = useForm({mode: "all"});


    const saveCat = (cat) => {
        dispatch({type: 'ADD_CAT', payload: cat})
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={"cat"} {...register("name")}/>
                <button>ADD CAT</button>
            </form>
            <div>
                {
                    cats && cats.map(cat =>
                        <div key={cat.id}>
                            Id:{cat.id} <br/>
                            Name: {cat.name} <br/>
                            <button onClick={() => {
                                dispatch({type: 'DELETE_CAT', payload: cat.id})
                            }}
                            >Delete
                            </button>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default Cat;