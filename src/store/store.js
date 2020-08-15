import createSagaMiddleware from "redux-saga";
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
};


const sagaMiddlware = createSagaMiddleware();
export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddlware)),
);

sagaMiddlware.run(rootSaga);
