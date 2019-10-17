import React from 'react'
import { shallow } from "enzyme";

import Filters from "./index";
import { findByTestAttr, checkProps } from "../../../utils";
import RadioButton from '../../common/RadioButton';

const expectedProps = {
    sortBy: '',
    orderBy: '',
    setSortBy: () => { },
    setOrderBy: () => { }
};

const setup = (props) => {
    const componentProps = {
        ...expectedProps,
        ...props
    };

    const component = shallow(<Filters {...componentProps}/>);
    return component;
};

describe('Filters component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const filterError = checkProps(Filters, expectedProps);
            expect(filterError).toBeUndefined();
        });
    });

    describe('Filters render', () => {
        let wrapper = setup();
        
        it('Should render filters without an error', () => {
            const filterComponent = findByTestAttr(wrapper, 'app-filter');
            expect(filterComponent.length).toBe(1);
        });
    });

    describe('Filters render item', () => {
        let wrapper = setup();

        it('Should render each filter item', () => {
            const filterPricingItem = findByTestAttr(wrapper, 'sort-by-pricing');
            expect(filterPricingItem.length).toBe(1);
            const filterRatingItem = findByTestAttr(wrapper, 'sort-by-rating');
            expect(filterRatingItem.length).toBe(1);
            const filterASCItem = findByTestAttr(wrapper, 'order-by-asc');
            expect(filterASCItem.length).toBe(1);
            const filterDESCItem = findByTestAttr(wrapper, 'order-by-desc');
            expect(filterDESCItem.length).toBe(1);
        });
    });

    describe('Filters call setSortBy and setOrderBy', () => {
        let mockSortByFunction = jest.fn();
        let mockOrderByFunction = jest.fn();

        let wrapper = setup({ setSortBy: () => mockSortByFunction(), setOrderBy: () => mockOrderByFunction() });

        it('Should mock sort by function', () => {
            const filterPricingItem = wrapper.find(RadioButton).at(0).dive();
            const filterRatingItem = wrapper.find(RadioButton).at(1).dive();
            const filterASCItem = wrapper.find(RadioButton).at(2).dive();
            const filterDESCItem = wrapper.find(RadioButton).at(3).dive();

            const pricingRadioButton = findByTestAttr(filterPricingItem, 'app-radio-button');
            const ratingRadioButton = findByTestAttr(filterRatingItem, 'app-radio-button');
            const ascRadioButton = findByTestAttr(filterASCItem, 'app-radio-button');
            const descRadioButton = findByTestAttr(filterDESCItem, 'app-radio-button');
            
            pricingRadioButton.simulate('change', { target: { name: 'sort_by', value: 'pricing' } });
            ratingRadioButton.simulate('change', { target: { name: 'sort_by', value: 'rating' } });
            ascRadioButton.simulate('change', { target: { name: 'order_by', value: 'asc' } });
            descRadioButton.simulate('change', { target: { name: 'order_by', value: 'desc' } });

            expect(mockSortByFunction).toBeCalledTimes(2);
            expect(mockOrderByFunction).toBeCalledTimes(2);
        });
    });
});