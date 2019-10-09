import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Input from './index';


describe('Input Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                inputExtraClass: 'app-input',
                inputLabel: 'Input',
                inputType: 'text',
                value: 'app input text',
                placeholder: 'Enter input text',
                dataTest: 'app',
                onChange: () => console.log('input changed')
            };
            const inputError = checkProps(Input, expectedProps);
            expect(inputError).toBeUndefined();
        });
    });

    describe('Input render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                inputExtraClass: 'app-input',
                inputLabel: 'Input',
                inputType: 'text',
                value: 'app input text',
                placeholder: 'Enter input text',
                dataTest: 'app',
                onChange: (e) => console.log('input changed: ', e.target.value)
            };
            wrapper = shallow(<Input {...props} />);
        });

        it('Should render input without an error', () => {
            const inputComponent = findByTestAttr(wrapper, 'app-input');
            expect(inputComponent.length).toBe(1);
        });

        it('Should render label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'app-label');
            expect(labelComponent.length).toBe(1);
        });
    });

    describe('Input onChange', () => {
        let wrapper;
        let value;

        beforeEach(() => {
            const props = {
                inputExtraClass: 'app-input',
                inputLabel: 'Input',
                inputType: 'text',
                value: 'app input text',
                placeholder: 'Enter input text',
                dataTest: 'app',
                onChange: (e) => { value = e.target.value; }
            };
            wrapper = shallow(<Input {...props} />);
        });

        it('Should return input value without an error', () => {
            const inputComponent = findByTestAttr(wrapper, 'app-input');
            inputComponent.simulate('change', { target: { value: 'Hello' } });

            expect(value).toBe('Hello');
        });
    });

    describe('Input render without label', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                inputExtraClass: 'app-input',
                inputLabel: '',
                inputType: 'text',
                value: 'app input text',
                placeholder: 'Enter input text',
                dataTest: 'app',
                onChange: () => console.log('input changed')
            };
            wrapper = shallow(<Input {...props} />);
        });

        it('Should render input without an error', () => {
            const inputComponent = findByTestAttr(wrapper, 'app-input');
            expect(inputComponent.length).toBe(1);
        });

        it('Should not render label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'app-label');
            expect(labelComponent.length).toBe(0);
        });
    });
});