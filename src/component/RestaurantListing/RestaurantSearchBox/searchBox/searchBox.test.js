import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils";
import SearchBox from './index';

const list = {
  "entity_type": "city",
  "entity_id": 10913,
  "title": "Driftwood, Texas",
  "latitude": 30.11712915,
  "longitude": -98.0131239,
  "city_id": 10913,
  "city_name": "Driftwood",
  "country_id": 216,
  "country_name": "United States"
};
const expectedProps = {
  value: 'data',
  result: [{...list}, {...list}, {...list}],
  onChange: () => {},
  message: 'not found',
};

const setupComponent = (props) => shallow(<SearchBox {...props} />);



describe('Search Box Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const inputError = checkProps(SearchBox, expectedProps);
            expect(inputError).toBeUndefined();
        });
    });

    describe('Renders Properly', () => {
        let wrapper = setupComponent(expectedProps);

        it('Should render without an error', () => {
            const inputComponent = findByTestAttr(wrapper, 'app-search-box');
            expect(inputComponent.length).toBe(1);
        });
    });

    describe('return locations corresponding to search value passed', () => {
      it('should render searched items if any', async () => {
        let wrapper = setupComponent({...expectedProps, value: 'dri'});
        const renderedDiv = findByTestAttr(wrapper, 'app-search-item');
        expect(renderedDiv.length).toBe(3)
      });
      it('should render no location found if not found', async () => {
        let wrapper = setupComponent({...expectedProps, value: 'hapy'});
        const renderedDiv = findByTestAttr(wrapper, 'app-search-item');
        expect(renderedDiv.length).toBe(0)
      });
    });
});