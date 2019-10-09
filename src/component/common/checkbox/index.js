import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({checkboxExtraClass, checkboxLabel, dataTest, checkedValue, onChange}) => {
    return (
        <div className="form-group form-check">
            <input type="checkbox" data-test={`${dataTest}-checkbox`} onChange={onChange} className={`form-check-input ${checkboxExtraClass}`} checked={checkedValue}/>
            <label data-test="checkbox-label" className="form-check-label">{checkboxLabel}</label>
        </div>
    )
};

Checkbox.defaultProps = {
    checkboxExtraClass: 'app',
    checkboxLabel: 'App checkbox',
    dataTest: 'app',
    checkedValue: false,
    onChange: (e) => console.log('checked: ', e.target.value)
};

Checkbox.propTypes = {
    checkboxExtraClass: PropTypes.string,
    checkboxLabel: PropTypes.string,
    dataTest: PropTypes.string,
    checkedValue: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox;