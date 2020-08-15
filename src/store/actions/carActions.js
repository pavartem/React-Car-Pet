import * as types from '../types';


export const startLoadingCars = () => ({
    type: types.START_LOADING_CARS,
});

export const addCarAction = (car) => ({
    type: types.ADD_CAR,
    payload: car,
});

export const addCarsAction = (cars) => ({
    type: types.ADD_CARS,
    payload: cars,
});

export const toggleCartItemAction = (cartItem) => ({
    type: types.TOGGLE_ITEM_CART,
    payload: cartItem,
});
