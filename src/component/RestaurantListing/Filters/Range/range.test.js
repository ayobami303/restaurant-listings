import React from "react";
import { shallow } from 'enzyme';
import Range from "./index";
import { findByTestAttr, checkProps } from "../../../../utils";

const expectedProps = {
    rangeExtraClass: 'app-range',
    rangeName: 'app_range',
    rangeMin: 0,
    rangeMax: 100,
    rangeStep: 10,
    rangeValue: 10,
    onChange: () => {}
};

const setup = (props={}) => {
    const componentProps= {
        ...expectedProps,
        ...props
    };

    let component = shallow(<Range {...componentProps} />);
    return component;
};


describe('Range Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const rangeError = checkProps(Range, expectedProps);
            expect(rangeError).toBeUndefined();
        });
    });

    describe('Range render', () => {
        let wrapper = setup();
        
        it('Should render range without an error', () => {
            const rangeComponent = findByTestAttr(wrapper, 'app-range');
            expect(rangeComponent.length).toBe(1);
        });
    });

    describe('Range onChange', () => {
        let mockFunction = jest.fn();
        let wrapper = setup({ onChange: mockFunction()});

        it('Should call mock function without an error', () => {
            const rangeComponent = findByTestAttr(wrapper, 'app-range');
            rangeComponent.simulate('change');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });
})