import React from 'react';
import { shallow } from "enzyme";

import RadioButton from "./index";
import { findByTestAttr, checkProps } from "../../../utils";


const expectedProps = {
    radioButtonExtraClass: 'app-radio-button',
    radioButtonName: 'app_radio_button',
    radioButtonLabel: 'App radio button',
    radioButtonValue: 'radio button',
    isChecked: false,
    onChange: () => console.log('checked')
};

const setup = (props={}) => {
    const componentProps = {
        ...expectedProps, 
        ...props
    };

    const component = shallow(<RadioButton {...componentProps}/>);
    return component;
}

describe('RadioButton Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const radioButtonError = checkProps(RadioButton, expectedProps);
            expect(radioButtonError).toBeUndefined();
        });
    });

    describe('RadioButton render', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        it('Should render radio button without an error', () => {
            const radioButtonComponent = findByTestAttr(wrapper, 'app-radio-button');
            expect(radioButtonComponent.length).toBe(1);
        });

        it('Should render radio button label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'radio-button-label');
            expect(labelComponent.length).toBe(1);
        });
    });

    describe('Checkbox onChange', () => {
        let mockFunction  = jest.fn();
        let wrapper = setup({ onChange: mockFunction() });

        it('Should call mock function without an error', () => {
            const radioButtonComponent = findByTestAttr(wrapper, 'app-radio-button');
            radioButtonComponent.simulate('click');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });
});