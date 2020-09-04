import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {store} from '../../assets/fakeStore';

import CardItem from "./index";

configure({adapter: new Adapter()});

describe('<CardItem/>', () => {

    const car = store.getState().cars[0];
    const wrapper = mount(<Provider store={store}><CardItem car={car}/></Provider>);

    it('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render right props for card', () => {
        expect(wrapper.contains(<div className="col-md-3">
            <h3>BMW 320</h3>
            <p>tedggfdgdgf</p>
        </div>)).toBeTruthy();
    });
});
