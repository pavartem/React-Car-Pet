import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {store} from '../../assets/fakeStore';
import Card from "./index";


configure({adapter: new Adapter()});

describe('<CardItem/>', () => {

    const car = store.getState().cars[0];
    const wrapper = mount(<Provider store={store}><Card car={car}/></Provider>);

    it('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render right card title prop', () => {
        expect(wrapper.contains(<h5 className="card-title">BMW 320</h5>)).toBeTruthy();
    });

    it('Should render right card description prop', () => {
        expect(wrapper.contains(<p className="card-text">tedggfdgdgf</p>)).toBeTruthy();
    });
});
