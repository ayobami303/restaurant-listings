import React from "react";
import { shallow } from 'enzyme';
import Card from "./";
import { findByTestAttr, checkProps } from "../../../../utils";

const expectedProps = {
  imageUrl: 'https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png',
  cardExtraClass: '', 
  linkText: 'View More',
  cardTitle: 'Card Title', 
  cardContent: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
  onClick: () => {}
};

const setup = (props={}) => {
    const componentProps= {
        ...expectedProps,
        ...props
    };

    let component = shallow(<Card {...componentProps} />);
    return component;
};


describe('Card Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const cardError = checkProps(Card, expectedProps);
            expect(cardError).toBeUndefined();
        });
    });

    describe('Card render', () => {
        let wrapper = setup();
        
        it('Should render card without an error', () => {
            const cardComponent = findByTestAttr(wrapper, 'app-card');
            expect(cardComponent.length).toBe(1);
        });
    });

    describe('Card onClick', () => {
        let mockFunction = jest.fn();
        let wrapper = setup({ onChange: mockFunction()});

        it('Should call mock function without an error', () => {
            const cardComponent = findByTestAttr(wrapper, 'app-card');
            cardComponent.simulate('click');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });
})