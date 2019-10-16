import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ dropdownExtraClass, dropdownName, dropdownOptions, selectedValue, onChange }) => {

  return (
    <div className="form-group">
      <select
        className={`form-control ${dropdownExtraClass}`}
        name={dropdownName}
        // value={selectedValue}
        onChange={(event) => onChange(event)}
        data-testid="app-dropdown"
      >
        {dropdownOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.defaultProps = {
  dropdownExtraClass: "app-dropdown",
  dropdownName: "app_dropdown",
  dropdownOptions: [
    { option: "one", value: "One" },
    { option: "two", value: "Two" }
  ],
  selectedValue: "",
  onChange: () => {}
};

Dropdown.propTypes = {
  dropdownExtraClass: PropTypes.string,
  dropdownName: PropTypes.string,
  dropdownOptions: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
