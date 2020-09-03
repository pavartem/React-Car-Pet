import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {store} from '../../assets/fakeStore';

import CardItem from "./index";

configure({adapter: new Adapter()});

describe('<CardItem/>', () => {

    const car = store.getState().cars[0];
    const wrapper = shallow(<Provider store={store}><CardItem car={car}/></Provider>);

    it('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render right props for card', () => {
        expect(wrapper.find(<div className="col-md-3">
            <h3>{car.name}</h3>
            <p>{car.description}</p>
        </div>)).toBeTruthy();
    });
});
