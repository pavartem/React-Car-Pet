import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {store} from '../../assets/fakeStore';

import CreateCar from "./index";

configure({adapter: new Adapter()});

describe('<CreateCar/>', () => {

    const wrapper = mount(<Provider store={store}><CreateCar /></Provider>);
    const wrapperForSnapshot = shallow(<Provider store={store}><CreateCar /></Provider>);

    it('Should render component', () => {
        expect(wrapperForSnapshot).toMatchSnapshot();
    });

    it('Should render right list', () => {
        expect(wrapper.contains(<ul className="list-group">
            <li className="list-group-item">Redux Saga (Add cars from backend)</li>
            <li className="list-group-item">Redux Thunk (AutoComplete for name input)</li>
            <li className="list-group-item disabled">Context</li>
        </ul>)).toBeTruthy();
    });
});
