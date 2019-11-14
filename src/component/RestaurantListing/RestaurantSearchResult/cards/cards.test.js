import React from "react";
import { shallow } from 'enzyme';
import Card from "./";
import CardContent from './content';
import { findByTestAttr, checkProps } from "../../../../utils";

const expectedProps = {
  imageUrl: 'https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png',
  cardExtraClass: '', 
  linkText: 'View More',
  cardTitle: 'Card Title', 
  location: {locality: 'abuja'},
  cuisines: 'cusins',
  timings: '11:00 Pm',
  user_rating: {rating_color: 'fffff', aggregate_rating: 4},
  cost_for_two: 44,
  currency: '$',
  onClick: () => {}
};

const contentProps = {
    label: 'fine apple',
    content: 'fine apple',
    labelClass: 'fine apple',
    contentClass: 'fine apple',
}

const setup = ( Component, defaultProps, props={} ) => {
    const componentProps= { ...defaultProps, ...props };

    return shallow(<Component {...componentProps} />);
};

describe('Card Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const cardError = checkProps(Card, expectedProps);
            expect(cardError).toBeUndefined();
        });
    });

    describe('Card render', () => {
        let wrapper = setup(Card, expectedProps);
        
        it('Should render card without an error', () => {
            const cardComponent = findByTestAttr(wrapper, 'app-card');
            expect(cardComponent.length).toBe(1);
        });
    });

    describe('Card onClick', () => {
        let mockFunction = jest.fn();
        let wrapper = setup(Card, expectedProps, { onChange: mockFunction()});

        it('Should call mock function without an error', () => {
            const cardComponent = findByTestAttr(wrapper, 'app-card');
            cardComponent.simulate('click');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });
})

describe('Content Component', () => {
    describe('Checking proptypes', () => {
        it('should not throw an errow', () => {
            const cardError = checkProps(CardContent, contentProps);
            expect(cardError).toBeUndefined();
        });
    });
    describe('Content Render', () => {
        let wrapper = setup(CardContent, contentProps);
        
        it('should render content in card without an error', () => {
            const contentComponent = findByTestAttr(wrapper, 'app-content');
            expect(contentComponent.length).toBe(1);
        });
    });
})