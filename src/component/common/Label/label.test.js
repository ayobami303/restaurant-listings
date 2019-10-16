import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Label from './index';


describe('Label Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                labelExtraClass: 'app-label',
                labelText: 'App label'
            };
            const labelError = checkProps(Label, expectedProps);
            expect(labelError).toBeUndefined();
        });
    });

    describe('Label render', () => {
        const props = {
            labelExtraClass: 'app-label',
            labelText: 'App label'
        };
        let wrapper = shallow(<Label {...props} />);

        it('Should render label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'app-label');
            expect(labelComponent.length).toBe(1);
        });
    });

});