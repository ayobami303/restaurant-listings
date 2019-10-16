import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import AppTextHeader from "./index";


const expectedProps = {
    appTextHeaderExtraCSS: 'app-text-header display-1',
    text: 'App text header'
};

describe('AppTextHeader Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {            
            const appTextHeaderError = checkProps(AppTextHeader, expectedProps);
            expect(appTextHeaderError).toBeUndefined();
        });
    });

    describe('AppTextHeader render', () => {
        let wrapper = shallow(<AppTextHeader {...expectedProps} />);

        it('Should render without an error', () => {
            const appTextHeaderComponent = findByTestAttr(wrapper, 'app-text-header');
            expect(appTextHeaderComponent.length).toBe(1);
        });

        it('Should render text without an error', () => {
            const appTextHeaderComponent = findByTestAttr(wrapper, 'app-text-header');
            const text = appTextHeaderComponent.text();
            expect(text).toBe('App text header');
        });
    });
})