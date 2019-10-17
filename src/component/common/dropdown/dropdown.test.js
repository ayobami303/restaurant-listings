import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Dropdown from './index';

const setUp = (props = {}) => {
    const defaultProps = {
        dropdownExtraClass: '',
        dropdownName: 'app_dropdown',
        selectedValue: '',
        dropdownOptions: [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}],
        onChange: (e) => { console.log('dropdown changed: ', e.target.value); },
        ...props
    };

    const component = shallow(<Dropdown { ...defaultProps }/>);
    return component;
};

describe('Dropdown Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                dropdownExtraClass: '',
                dropdownName: 'app_dropdown',
                dropdownOptions: [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}],
                selectedValue: '',
                onChange: (e) => { console.log('dropdown changed: ', e.target.value)}
            };
            const dropdownError = checkProps(Dropdown, expectedProps);
            expect(dropdownError).toBeUndefined();
        });
    });

    describe('Dropdown render', () => {
        let wrapper = setUp();

        it('Should render dropdown without an error', () => {
            const dropdownComponent = findByTestAttr(wrapper, 'app-dropdown');
            expect(dropdownComponent.length).toBe(1);
        });
    });

    describe('Dropdown onChange', () => {
        let mockFunction = jest.fn();
        const props = {
            onChange: mockFunction
        };
        let wrapper = setUp(props);

        it('Should call mock function without an error', () => {
            const dropdownComponent = findByTestAttr(wrapper, 'app-dropdown');
            dropdownComponent.simulate('change');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });

});