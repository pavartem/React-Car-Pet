import * as actions from '../../actions/carActions';
import {addCarsAction, addCarsActionError} from '../../actions/carActions';
import * as types from '../../types';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from "redux-thunk";
import {getCarsSaga, watchGetCarsSaga} from "../../sagas/cars";
import {takeEvery} from 'redux-saga/effects';
import {runSaga} from 'redux-saga';
import * as api from '../../../api/api';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('carActions', () => {
    it('should create an action to add a cars', () => {
        const payload = [
            {
                id: 1,
                name: 'BMW 320',
                description: 'tedggfdgdgf',
                added: false,
            }
        ];
        const expectedAction = {
            type: types.ADD_CARS,
            payload,
        }
        expect(actions.addCarsAction(payload)).toEqual(expectedAction)
    });

    it('should create an action to toggle cart item', () => {
        const payload = [
            {
                id: 1,
                name: 'BMW 320',
                description: 'tedggfdgdgf',
                added: false,
            }
        ];
        const expectedAction = {
            type: types.TOGGLE_ITEM_CART,
            payload,
        }
        expect(actions.toggleCartItemAction(payload)).toEqual(expectedAction)
    })
});

// Redux thunk

describe('async actions redux thunk', () => {

    const autoCompleteCars = [{
        id: 1,
        make: 'BMW 320',
        description: 'tedggfdgdgf',
        added: false,
    }];

    afterEach(() => {
        fetchMock.restore()
    });

    it('creates SUCCESS_AUTO_COMPLETE when fetching autocomplete suggestions has been done', () => {
        fetchMock.getOnce('http://localhost:3002/cars', {
            body: autoCompleteCars,
            headers: {'content-type': 'application/json'}
        })

        const expectedActions = [
            {type: types.START_AUTO_COMPLETE},
            {
                type: types.SUCCESS_AUTO_COMPLETE, payload: autoCompleteCars,
            }
        ]
        const store = mockStore({cars: []})

        return store.dispatch(actions.fetchAutoComplete('bmw')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});

// Redux saga

describe('async actions redux saga', () => {

    const myCars = [{
        id: 1,
        name: 'BMW 320',
        description: 'tedggfdgdgf',
        added: false,
    }];

    const initialStore = {
        loading: false,
        loadingAutoComplete: false,
        autoComplete: []
    };

    it('Should wait for a user to click load cars btn', () => {
        const gen = watchGetCarsSaga();
        expect(gen.next().value).toEqual(takeEvery(types.START_LOADING_CARS, getCarsSaga));
    })

    it('Should call api and dispatch success action', async () => {
        const dispatchedActions = [];

        api.fetchMyCars = jest.fn(() => Promise.resolve(myCars));

        const fakeStore = {
            getState: () => (initialStore),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, getCarsSaga).done;
        expect(api.fetchMyCars.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(addCarsAction(myCars));
    });

    it('Should handle errors in case of fail', async () => {
        const dispatchedActions = [];
        api.fetchMyCars = jest.fn(() => Promise.reject());

        const fakeStore = {
            getState: () => (initialStore),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, getCarsSaga).done;
        expect(api.fetchMyCars.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(addCarsActionError());
    });

})
