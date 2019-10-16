import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../common/Dropdown';
import InputBox from '../../common/Input';
import Button from '../../common/Button';
import Label from '../../common/Label';
import SearchBox from './searchBox';
import './styles.scss';

const RestaurantSearchBox = ({action, handleDropDownChange, dropDownOptions, handleSearchValues, searchState}) => {

  const { sortType, value, message, locations: results } = searchState;

  const searchValues = () => (value && handleSearchValues())

  return (
    <div className="restaurant app-bg" data-testid="app-restaurant-search-box">
      <div className="header">
        <Label labelExtraClass="" labelText="Sort By" />
        <DropDown dropdownExtraClass="" dropdownOptions={dropDownOptions} onChange={handleDropDownChange} />
        {sortType === 'Location' ? 
          <SearchBox value={value} message={message} onChange={action} result={results} /> 
            : 
          <InputBox value={value} onChange={action}  />}
        <Button onClick={searchValues} buttonText="secondary" buttonExtraCSS="" />
      </div>
    </div>
  );
}

RestaurantSearchBox.propTypes = {
  action: PropTypes.func.isRequired,
  handleDropDownChange: PropTypes.func.isRequired,
  dropDownOptions: PropTypes.array.isRequired,
  searchState: PropTypes.shape({
    locations: PropTypes.array.isRequired,
    sortType: PropTypes.string,
    value: PropTypes.string,
    message: PropTypes.string,
  }),
}

RestaurantSearchBox.defaultProps = {
  searchState: {
    sortType: "Location",
  }
}
 
export default RestaurantSearchBox;