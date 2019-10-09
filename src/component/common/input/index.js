import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Input = ({inputExtraClass, inputLabel, inputType, onChange, value, placeholder, dataTest}) => {
    return(
        <div className="form-group">
            { inputLabel && <label data-test={`${dataTest}-label`}>{inputLabel}</label>}
            <input data-test={`${dataTest}-input`} type={inputType} onChange={onChange} value={value} placeholder={placeholder} className={`form-control ${inputExtraClass}`}/>
        </div>
    );
};

Input.defaultProps = {
    inputExtraClass: 'app-input',
    inputLabel: 'Input Label',
    inputType: 'text',
    value: '',
    placeholder: 'Enter input text',
    dataTest: 'app',
    onChange: (e) => console.log('input changed: ', e.target.value)
}

Input.propTypes = {
    inputExtraClass: PropTypes.string,
    inputLabel: PropTypes.string,
    inputType: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    dataTest: PropTypes.string,
    onChange: () => console.log('input changed')
}
export default Input;