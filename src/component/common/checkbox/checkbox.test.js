import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Checkbox from './index';


describe('Checkbox Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                checkboxExtraClass: 'app-checkbox',
                checkboxName: 'app_checkbox',
                checkboxLabel: 'App checkbox',
                checkedValue: 'checkbox',
                isChecked: false,
                onChange: () => console.log('checked')
            };
            const checkboxError = checkProps(Checkbox, expectedProps);
            expect(checkboxError).toBeUndefined();
        });
    });

    describe('Checkbox render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                checkboxExtraClass: 'app-checkbox',
                checkboxName: 'app_checkbox',
                checkboxLabel: 'App checkbox',
                checkedValue: 'checkbox',
                isChecked: false,
                onChange: () => console.log('checked')
            };
            wrapper = shallow(<Checkbox {...props} />);
        });

        it('Should render checkbox without an error', () => {
            const checkboxComponent = findByTestAttr(wrapper, 'app-checkbox');
            expect(checkboxComponent.length).toBe(1);
        });

        it('Should render checkbox label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'checkbox-label');
            expect(labelComponent.length).toBe(1);
        });
    });

    describe('Checkbox onChange', () => {
        let mockFunction  = jest.fn();
        const props = {
            checkboxExtraClass: 'app-checkbox',
            checkboxName: 'app_checkbox',
            checkboxLabel: 'App checkbox',
            checkedValue: 'checkbox',
            isChecked: false,
            onChange: mockFunction
        };
        let wrapper = shallow(<Checkbox {...props} />);

        it('Should return input value without an error', () => {
            const checkboxComponent = findByTestAttr(wrapper, 'app-checkbox');
            checkboxComponent.simulate('change');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });

});