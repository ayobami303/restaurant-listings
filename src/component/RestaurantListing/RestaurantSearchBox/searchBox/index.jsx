import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SearchBox = ({ value, result, onChange, message }) => {

  function displayList() {
    if (result.length > 0)
      return (
          result.map((location, index) => (
            <option data-testid="app-search-item" className="dropDownList" key={index}>{location.title}</option>)
          )
        );
    return (<option>{message}</option>)
  }

  return (
    <div className="listDiv">
      <input list="browsers" name="browsers" data-testid="app-search-box" className="form-control" value={value} type="text" autoComplete="no" onChange={(event) => onChange(event)}/> 
      <datalist id="browsers" className="dropDown truncate">
        {displayList()}
      </datalist>
      {/* <ul className="dropDown truncate" >{displayList()}</ul> */}
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