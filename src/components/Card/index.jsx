import React from 'react';
import './index.css';

import {useDispatch} from "react-redux";
import {toggleCartItemAction} from "../../store/actions/carActions";

const Card = ({car}) => {

    const dispatch = useDispatch();
    const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/7f/2020_BMW_X7_M_Sport.jpg';
    return (
        <div className='col-md-6'>
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt="test"/>
                <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <p className="card-text">{car.description}</p>
                    <div
                        onClick={() => dispatch(toggleCartItemAction(car))}
                        className={car.added ? `btn btn-primary disabled` : 'btn btn-primary'}
                    >
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
