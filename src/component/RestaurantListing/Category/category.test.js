import React from 'react'
import { shallow } from "enzyme";

import Category from "./index";
import { findByTestAttr, checkProps } from "../../../utils";

const expectedProps = {
    categoryList: [{ id: 1, name: 'Delivery' }, { id: 2, name: 'Dine-out' }]
};

const setup = (props) => {
    const componentProps = {
        ...expectedProps,
        ...props
    };

    const component = shallow(<Category {...componentProps}/>);
    return component;
};

describe('Category component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const categoryError = checkProps(Category, expectedProps);
            expect(categoryError).toBeUndefined();
        });
    });

    describe('Category render', () => {
        let wrapper = setup();
        
        it('Should render category without an error', () => {
            const categoryComponent = findByTestAttr(wrapper, 'app-category');
            expect(categoryComponent.length).toBe(1);
        });
    });

    describe('Category render item', () => {
        const props = {
            categoryList: [{ id: 1, name: 'Delivery' }, { id: 2, name: 'Dine-out' }, { id: 3, name: 'Dine-out' }]
        };
        let wrapper = setup(props);

        it('Should render each category item', () => {
            const categoryItem = findByTestAttr(wrapper, 'app-category-item');
            expect(categoryItem.length).toBe(3);
        });
    });

    describe('Category renders no item', () => {
        const props = {
            categoryList: []
        };
        let wrapper = setup(props);

        it('Should render each category item', () => {
            const categoryItem = findByTestAttr(wrapper, 'app-category-item');
            const noCategory = findByTestAttr(wrapper, 'no-category');
            expect(categoryItem.length).toBe(0);
            expect(noCategory.length).toBe(1);
        });
    });
});