import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SearchBox = ({ value, result, onChange, message }) => {

  function displayList() {
    let locations = [];
    locations = value && result.filter((location) => location.city_name.toLowerCase().match(value));
    if (locations.length > 0)
      return (locations.map((location, index) => (<div data-testid="app-search-item" className="dropDownList" key={index}>{location.title}</div>)));
    return (<div>{message}</div>)
  }

  return (
    <div className="listDiv">
      <input data-testid="app-search-box" className="form-control" value={value} type="text" autoComplete="no" onChange={(event) => onChange(event)}/>
      <ul className="">{displayList()}</ul>
    </div>
  )
}
 
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  result: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  message: PropTypes.string,
}

SearchBox.defaultProps = {
  message: 'Location not found',
}
export default SearchBox;