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
                dataTest: 'app',
                onClick: () => { console.log('button clicked'); }
            };
            const buttonError = checkProps(Button, expectedProps);
            expect(buttonError).toBeUndefined();
        });
    });

    describe('Button render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonType: 'light',
                buttonText: 'Button',
                dataTest: 'app',
                onClick: () => { console.log('button clicked'); }
            };
            wrapper = shallow(<Button {...props} />);
        });

        it('Should render without an error', () => {
            const buttonComponent = findByTestAttr(wrapper, 'app-button');
            expect(buttonComponent.length).toBe(1);
        });
    });
});