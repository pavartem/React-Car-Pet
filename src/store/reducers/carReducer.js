import * as types from '../types';

export function reducer(state, {type, payload}) {
    switch (type) {
        case types.START_LOADING_CARS:
            return {
                ...state,
                loading: true,
            };
        case types.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, payload],
                loading: false,
            };
        case types.ADD_CARS:
            return {
                ...state,
                cars: [...state.cars, ...payload],
                loading: false,
            };
        case types.TOGGLE_ITEM_CART:
            return {
                ...state,
                cars: state.cars.map(car => (car.id === payload.id) ? {...car, added: !car.added} : car)
            };
        case types.START_AUTO_COMPLETE:
            return {
                ...state,
                loadingAutoComplete: true,
            }
        case types.SUCCESS_AUTO_COMPLETE:
            return {
                ...state,
                autoComplete: [...payload],
            }

        default:
            return {
                ...state,
            }
    }
}
