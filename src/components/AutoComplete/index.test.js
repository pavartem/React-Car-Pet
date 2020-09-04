import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AutoComplete} from "./index";
configure({adapter: new Adapter()});

describe('<AutoComplete/>', () => {
    const autoComplete = [{make: 'bmw', model: 'x3'}];
    const setName = jest.fn();
    const toggleAutoComplete = jest.fn();

    const wrapperForSnapshot = shallow(
        <AutoComplete autoComplete={autoComplete}
                      setName={setName}
                      toggleAutoComplete={toggleAutoComplete}
        />);

    it('Should render component', () => {
        expect(wrapperForSnapshot).toMatchSnapshot();
    });
});
