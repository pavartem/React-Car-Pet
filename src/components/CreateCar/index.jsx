import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addCarAction, startLoadingCars} from "../../store/actions/carActions";

const CreateCar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const randomId = Math.floor(Math.random() * Math.floor(200000));

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mt-2"
                placeholder='name'
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control mt-2"
                placeholder='description'
            />

            <div className="btn btn-primary my-3 mx-2"
                 onClick={() => dispatch(addCarAction({
                     id: randomId,
                     name,
                     description,
                     added: false
                 }))}>
                Add
            </div>
            <div className="btn btn-primary my-3 mx-2"
                 onClick={() => dispatch(startLoadingCars())}>
                Load Cars
            </div>
        </div>
    );
};

export default CreateCar;
