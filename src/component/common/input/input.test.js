import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Input from './index';


describe('Input Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                inputExtraClass: 'app-input',
                inputName: 'app_input',
                inputType: 'text',
                value: 'app input text',
                placeholder: 'Enter input text',
                onChange: () => console.log('input changed')
            };
            const inputError = checkProps(Input, expectedProps);
            expect(inputError).toBeUndefined();
        });
    });

    describe('Input render', () => {
        const props = {
            inputExtraClass: 'app-input',
            inputName: 'app_input',
            inputType: 'text',
            value: 'app input text',
            placeholder: 'Enter input text',
            onChange: (e) => console.log('input changed: ', e.target.value)
        };
        let wrapper = shallow(<Input {...props} />);

        it('Should render input without an error', () => {
            const inputComponent = findByTestAttr(wrapper, 'app-input');
            expect(inputComponent.length).toBe(1);
        });
    });

    describe('Input onChange', () => {
        let value;

        const props = {
            inputExtraClass: 'app-input',
            inputID: 'app',
            inputLabel: 'Input',
            inputType: 'text',
            value: 'app input text',
            placeholder: 'Enter input text',
            dataTest: 'app',
            onChange: (e) => { value = e.target.value; }
        };
        let wrapper = shallow(<Input {...props} />);

        it('Should return input value without an error', () => {
            const inputComponent = findByTestAttr(wrapper, 'app-input');
            inputComponent.simulate('change', { target: { value: 'Hello' } });

            expect(value).toBe('Hello');
        });
    });
});