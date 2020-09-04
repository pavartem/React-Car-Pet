import * as actions from '../../actions/carActions';
import * as types from '../../types';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from "redux-thunk";

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

describe('async actions', () => {

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
})
