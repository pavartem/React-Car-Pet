import configureStore from "redux-mock-store";

const fakeStoreObj = {
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

export const store = configureStore()(fakeStoreObj);


