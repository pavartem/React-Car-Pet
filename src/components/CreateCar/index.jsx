import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addCarAction, startLoadingCars, fetchAutoComplete} from "../../store/actions/carActions";
import AutoComplete from "../AutoComplete";

const CreateCar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [autoCompleteActive, toggleAutoComplete] = useState(false);
    const randomId = Math.floor(Math.random() * Math.floor(200000));

    return (
        <>
            <div className="border p-2">
                <h3 className='mb-3'>Saga</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        dispatch(fetchAutoComplete(e.target.value));
                        toggleAutoComplete(true);
                    }}
                    className="form-control mt-2"
                    placeholder='name'
                />
                {autoCompleteActive && <AutoComplete setName={setName} toggleAutoComplete={toggleAutoComplete}/>}
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control mt-2"
                    placeholder='description'
                />

                <div className="btn btn-primary my-3 mx-2 btn-lg"
                     onClick={() => dispatch(addCarAction({
                         id: randomId,
                         name,
                         description,
                         added: false
                     }))}>
                    Add
                </div>
                <div className="btn btn-primary my-3 mx-2 btn-lg"
                     onClick={() => dispatch(startLoadingCars())}>
                    Load Cars (Redux Saga)
                </div>
            </div>
            <div className='border p-3 my-3'>
                <h3>State management method:</h3>
                <ul className="list-group">
                    <li className="list-group-item">Redux Saga (Add cars from backend)</li>
                    <li className="list-group-item">Redux Thunk (AutoComplete for name input)</li>
                    <li className="list-group-item disabled">Context</li>
                </ul>
            </div>
        </>
    );
};

export default CreateCar;
