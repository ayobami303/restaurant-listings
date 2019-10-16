import React from 'react';
import PropTypes from 'prop-types';

const Input = ({inputExtraClass,inputName, inputType, onChange, value, placeholder}) => {
    return(
        <div className="form-group">
            <input data-testid="app-input" type={inputType} onChange={onChange} value={value} placeholder={placeholder} className={`form-control ${inputExtraClass}`} name={inputName}/>
        </div>
    );
};

Input.defaultProps = {
    inputExtraClass: 'app-input',
    inputName: 'app_input',
    inputType: 'text',
    value: '',
    onChange: (e) => { }
}

Input.propTypes = {
    inputExtraClass: PropTypes.string,
    inputName: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default Input;