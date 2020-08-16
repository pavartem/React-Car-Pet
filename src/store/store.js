import createSagaMiddleware from "redux-saga";
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers/carReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "./sagas/rootSaga";

const initialState = {
    cars: [
        {
            id: 1,
            name: 'BMW 320',
            description: 'tedggfdgdgf',
            added: false,
        },
        {
            id: 2,
            name: 'BMW X5',
            description: 'tedggfdgdgf2',
            added: true,
        },
    ],
    loading: false,
    loadingAutoComplete: false,
    autoComplete: [],
};


const sagaMiddlware = createSagaMiddleware();
export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddlware, thunkMiddleware)),
);

sagaMiddlware.run(rootSaga);
