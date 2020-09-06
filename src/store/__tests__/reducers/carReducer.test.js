import {reducer} from '../../reducers/carReducer';
import * as types from '../../types';

describe('Cars reducer', () => {
    it('should handle START_LOADING_CARS', () => {
        expect(
            reducer([], {
                type: types.START_LOADING_CARS,
            })
        ).toEqual({
            loading: true,
        })
    });

    it('should handle ADD_CAR', () => {
        const cars = [{
            id: 1,
            name: 'BMW 322',
            description: 'tedggfdgdgf',
            added: false,
        }];

        const car = {
            id: 3,
            name: 'BMW X5',
            description: 'tedggfdgdgf',
            added: false,
        }
        expect(
            reducer({cars}, {
                type: types.ADD_CAR,
                payload: car,
            })
        ).toEqual({
            cars: [...cars, car],
            loading: false,
        })
    });

    it('should handle ADD_CARS', () => {
        const cars = [{
            id: 1,
            name: 'BMW 322',
            description: 'tedggfdgdgf',
            added: false,
        }];

        const additionalCars = [{
            id: 3,
            name: 'BMW X5',
            description: 'tedggfdgdgf',
            added: false,
        }];

        expect(
            reducer({cars}, {
                type: types.ADD_CARS,
                payload: additionalCars,
            })
        ).toEqual({
            cars: [...cars, ...additionalCars],
            loading: false,
        })
    });

    it('should handle TOGGLE_ITEM_CART', () => {
        const cars = [
            {
                id: 1,
                name: 'BMW 322',
                description: 'tedggfdgdgf',
                added: false,
            },
            {
                id: 2,
                name: 'BMW 323',
                description: 'tedggfdgdgf',
                added: false,
            }
        ];

        const expectedCars = [
            {
                id: 1,
                name: 'BMW 322',
                description: 'tedggfdgdgf',
                added: true,
            },
            {
                id: 2,
                name: 'BMW 323',
                description: 'tedggfdgdgf',
                added: false,
            }
        ];

        expect(
            reducer({cars}, {
                type: types.TOGGLE_ITEM_CART,
                payload: {id: 1},
            })
        ).toEqual({
            cars: expectedCars,
        })
    });

    it('should handle START_AUTO_COMPLETE', () => {
        expect(
            reducer({loadingAutoComplete: false}, {
                type: types.START_AUTO_COMPLETE,
            })
        ).toEqual({
            loadingAutoComplete: true,
        })
    });

    it('should handle SUCCESS_AUTO_COMPLETE', () => {
        const cars = [{
            id: 1,
            name: 'BMW 322',
            description: 'tedggfdgdgf',
            added: false,
        }];

        expect(
            reducer({autoComplete: []}, {
                type: types.SUCCESS_AUTO_COMPLETE,
                payload: cars,
            })
        ).toEqual({
            autoComplete: [...cars],
        })
    });

})
