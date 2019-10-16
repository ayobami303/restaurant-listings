import React from "react";
import { shallow } from "enzyme";
import RestaurantSearchResult from "./";
import Cards from './cards'
import { findByTestAttr, checkProps } from "../../../utils";

const restuarantSample = {
  image:
    "https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png",
  link: "View More",
  title: "Card Title",
  content:
    "Some quick example text to build on the card title and make up the bulk of the cards content.",
};
const expectedProps = {
  results: [{...restuarantSample, id: 1}],
};

const setup = (props = {}) => {
  const componentProps = {
    ...expectedProps,
    ...props
  };

  let component = shallow(<RestaurantSearchResult {...componentProps} />);
  return component;
};

describe("Restaurant Result Component", () => {
  describe("Checking propTypes", () => {
    it("Should not throw error", () => {
      const restaurantError = checkProps(RestaurantSearchResult, expectedProps);
      expect(restaurantError).toBeUndefined();
    });
  });

  describe("Restaurant List render", () => {
    let wrapper = setup();
    it("Should render restaurant without an error", () => {
      const restaurantComponent = findByTestAttr(wrapper, "app-results");
      expect(restaurantComponent.length).toBe(1);
    });
  });

  describe("Restaurant List render", () => {
    it("Should render restaurant with 2 Cards as passed on props", () => {
      let wrapper = setup({
        results: [
          {...restuarantSample, id: 1},
          {...restuarantSample, id: 2},
        ]
      });
      expect(wrapper.find(Cards)).toHaveLength(2);
    });
  });
});
