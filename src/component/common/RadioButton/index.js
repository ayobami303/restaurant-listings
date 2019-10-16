import React from "react";
import PropTypes from 'prop-types';

const RadioButton = ({radioButtonExtraClass, radioButtonLabel, radioButtonName, radioButtonValue, isChecked, onChange}) => {
    return (
        <div className="form-check">
            <input type="radio" data-testid="app-radio-button" onChange={onChange} name={radioButtonName} className={`form-check-input ${radioButtonExtraClass}`} value={radioButtonValue} checked={isChecked}/>
            <label data-testid="radio-button-label" className="form-check-label">{radioButtonLabel}</label>
        </div>
    );
};

RadioButton.defaultProps = {
    radioButtonExtraClass: 'app-radio-button',
    radioButtonName: 'app_radio_button',
    radioButtonLabel: 'App radio button',
    radioButtonValue: 'radio button',
    isChecked: false,
    onChange: () => { }
};

RadioButton.propTypes = {
    radioButtonExtraClass: PropTypes.string,
    radioButtonName: PropTypes.string,
    radioButtonLabel: PropTypes.string.isRequired,
    radioButtonValue: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default RadioButton;