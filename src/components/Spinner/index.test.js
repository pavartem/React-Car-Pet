import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from "./index";

configure({adapter: new Adapter()});

describe('<Spinner/>', () => {
    const wrapper = shallow(<Spinner/>);

    it('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render right div', () => {
        expect(wrapper.find(<div className="spinner-border text-primary text-center" role="status">
            <span className="sr-only">Loading...</span>
        </div>)).toBeTruthy();
    });

    it('Should render right text', () => {
        expect(wrapper.text()).toEqual('Loading...');
    });
});
