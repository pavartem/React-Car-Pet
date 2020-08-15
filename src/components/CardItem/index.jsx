import React from 'react';
import {useDispatch} from "react-redux";
import {toggleCartItemAction} from "../../store/actions/carActions";

const CardItem = ({car}) => {
    const dispatch = useDispatch();

    const classList = 'btn btn-danger btn-sm mt-4';
    return (
        <div className='row border p-1'>
            <div className="col-md-6">
                <img className='img-fluid'
                     src='https://upload.wikimedia.org/wikipedia/commons/7/7f/2020_BMW_X7_M_Sport.jpg' alt=""/>
            </div>
            <div className="col-md-3">
                <h3>{car.name}</h3>
                <p>{car.description}</p>
            </div>
            <div className="col-md-3">
                <div onClick={() => dispatch(toggleCartItemAction(car))} className={car.added ? classList : `${classList} disabled`}>Remove</div>
            </div>
        </div>
    );
};

export default CardItem;
