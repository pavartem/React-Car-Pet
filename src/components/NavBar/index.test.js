import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from "./index";

configure({adapter: new Adapter()});

describe('<NavBar/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavBar/>);
    })

    it('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render right classes', () => {
        wrapper.setProps({theme: 'dark'});
        expect(wrapper.contains(<nav className={`navbar navbar-dark bg-dark`}>
            <div className="navbar-brand">
                Redux Hooks
            </div>
        </nav>)).toBeTruthy();
    });

    it('Should render right text', () => {
        expect(wrapper.text()).toEqual('Redux Hooks');
    });
});
