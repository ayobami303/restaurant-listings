import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../common/Dropdown';
import InputBox from '../../common/Input';
import Button from '../../common/Button';
import Label from '../../common/Label';
import SearchBox from './searchBox';
import './styles.scss';
import HigherOC from '../../hoc';

export const RestaurantSearchBox = ({action, resetSearch, notification, search, searchResults, searchRestaurant}) => {

  const [dropDownState, setDropDownState] = useState('Location');

  const dropDownOptions = [
    { option: "Location", value: "Location", id: 1 },
    { option: "Restaurant", value: "Restaurant", id: 2 }
  ];

  function handleDropDownChange(context) {
    const value = context.target.value;
    resetSearch();
    setDropDownState(value);
  }

  const searchValues = () => (search && searchRestaurant(dropDownState));

  return (
    <div className="restaurant app-bg" data-testid="app-restaurant-search-box">
      <div className="header">
        <Label labelExtraClass="" labelText="Sort By" />
        <DropDown
          dropdownExtraClass=""
          dropdownOptions={dropDownOptions}
          onChange={handleDropDownChange}
        />
        { dropDownState === 'Location' ?
          <SearchBox
            value={search}
            message={notification}
            result={searchResults}
            onChange={(event) => action(event.target.value)}
          /> : 
          <InputBox
            value={search}
            message={notification}
            result={searchResults}
            onChange={(event) => action(event.target.value, false)}
          />
        }
        <Button onClick={searchValues} buttonText="Search" buttonExtraCSS="" />
      </div>
    </div>
  );
}

RestaurantSearchBox.propTypes = {
  action: PropTypes.func,
  handleDropDownChange: PropTypes.func,
  dropDownOptions: PropTypes.array,
}

export default HigherOC(RestaurantSearchBox);
