import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import AppText from './index';

const expectedProps = {
    appTextExtraCSS: 'app-text',
    size: 'medium',
    text: 'App text content',
};

describe('AppText Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {            
            const appTextError = checkProps(AppText, expectedProps);
            expect(appTextError).toBeUndefined();
        });
    });

    describe('AppText render', () => {
        let wrapper = shallow(<AppText {...expectedProps} />);

        it('Should render without an error', () => {
            const appTextComponent = findByTestAttr(wrapper, 'app-text');
            expect(appTextComponent.length).toBe(1);
        });

        it('Should render text without an error', () => {
            const appTextComponent = findByTestAttr(wrapper, 'app-text');
            const text = appTextComponent.text();
            expect(text).toBe('App text content');
        });
    });

});