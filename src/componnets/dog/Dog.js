import {useForm} from "react-hook-form";

const Dog = ({stateDispatch}) => {

    const {register, reset, handleSubmit} = useForm();
    const [{dogs}, dispatch] = stateDispatch;

        const saveDog = (dog) => {
            dispatch({type: 'ADD_DOG', payload: dog});
            reset();
        };

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={"Dog"} {...register('name')}/>
                <button>ADD DOG</button>
            </form>

            {dogs.map(dog =>
                <div key={dog.id}>
                    Id: {dog.id} <br/>
                    Name: {dog.name} <br/>
                    <button onClick={() => dispatch({type: 'DELETE_DOG', payload: dog.id})
                    }>Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dog;