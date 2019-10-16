import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Button from './index';


describe('Button Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                buttonType: 'light',
                buttonText: 'Button',
                onClick: () => { console.log('button clicked'); }
            };
            const buttonError = checkProps(Button, expectedProps);
            expect(buttonError).toBeUndefined();
        });
    });

    describe('Button render', () => {
        const props = {
            buttonType: 'light',
            buttonText: 'Button',
            onClick: () => { console.log('button clicked'); }
        };
        let wrapper = shallow(<Button {...props} />);

        it('Should render without an error', () => {
            const buttonComponent = findByTestAttr(wrapper, 'app-button');
            expect(buttonComponent.length).toBe(1);
        });
    });

    describe('Button calls function', () => {
        let mockFunction = jest.fn();

        const props = {
            buttonType: 'light',
            buttonText: 'Button',
            dataTest: 'app',
            onClick: mockFunction()
        };
        let wrapper = shallow(<Button {...props} />);

        it('Should call mock function without an error', () => {
            const buttonComponent = findByTestAttr(wrapper, 'app-button');
            buttonComponent.simulate('click');
            const callback = mockFunction.mock.calls.length;
            expect(callback).toBe(1);
        });
    });

});