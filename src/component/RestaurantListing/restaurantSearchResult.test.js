

import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../utils";
import RestaurantSearchResult from "./index";
import Category from "./Category";
import Filters from "./Filters";
import RestaurantSearchBox from "./RestaurantSearchBox";

const expectedProps = {};

const setupComponent = props => shallow(<RestaurantSearchResult {...props} />);

describe("Search Box Component", () => {
  describe("Checking propTypes", () => {
    it("Should not throw error", () => {
      const inputError = checkProps(RestaurantSearchResult, expectedProps);
      expect(inputError).toBeUndefined();
    });
  });

  describe("Renders Properly", () => {
    let wrapper = setupComponent(expectedProps);

    it("Should render without an error", () => {
      const inputComponent = findByTestAttr(
        wrapper,
        "app-restaurant-search-result"
      );
      expect(inputComponent.length).toBe(1);
    });
  });

  describe("Renders single children components", () => {
    it('should render a category component', () => {
      const wrapper = setupComponent();
      expect(wrapper.find(Category)).toHaveLength(1);
      expect(wrapper.find(Filters)).toHaveLength(1);
      expect(wrapper.find(RestaurantSearchBox)).toHaveLength(1);
    })
  })
});
