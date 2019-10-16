import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import RestaurantSearchBox from "./index";

const expectedProps = {
  action: () => {},
  handleDropDownChange: () => {},
  dropDownOptions: [],
  searchState: {
    locations: []
  }
};

const setupComponent = props => shallow(<RestaurantSearchBox {...props} />);

describe("Search Box Component", () => {
  describe("Checking propTypes", () => {
    it("Should not throw error", () => {
      const inputError = checkProps(RestaurantSearchBox, expectedProps);
      expect(inputError).toBeUndefined();
    });
  });

  describe("Renders Properly", () => {
    let wrapper = setupComponent(expectedProps);

    it("Should render without an error", () => {
      const inputComponent = findByTestAttr(
        wrapper,
        "app-restaurant-search-box"
      );
      expect(inputComponent.length).toBe(1);
    });
  });
});
