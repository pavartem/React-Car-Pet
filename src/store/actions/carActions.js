import * as types from '../types';

export const addCarsAction = (cars) => ({
    type: types.ADD_CARS,
    payload: cars,
});

export const addCarsActionError = () => ({
    type: types.ADD_CARS_ERROR,
});

export const toggleCartItemAction = (cartItem) => ({
    type: types.TOGGLE_ITEM_CART,
    payload: cartItem,
});

// Redux Sagas

export const startLoadingCars = () => ({
    type: types.START_LOADING_CARS,
});

export const addCarAction = (car) => ({
    type: types.ADD_CAR,
    payload: car,
});


// Redux Thunk

export const startAutoComplete = () => ({
    type: types.START_AUTO_COMPLETE,
});

export const successAutoComplete = (autoComplete) => ({
    type: types.SUCCESS_AUTO_COMPLETE,
    payload: autoComplete,
});

export const fetchAutoComplete = (query) => {
    return dispatch => {
        dispatch(startAutoComplete())
        return fetch('http://localhost:3002/cars')
            .then(response => response.json())
            .then(cars => cars.filter(car => car.make.toLowerCase().includes(query.toLowerCase())))
            .then(cars => cars.slice(0, 6))
            .then(filteredCars => dispatch(successAutoComplete(filteredCars)));
    }
}
