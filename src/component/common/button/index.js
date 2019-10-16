import React from 'react';
import PropTypes from 'prop-types';


const Button = ({buttonExtraCSS, buttonType, buttonText, onClick}) => {
    return (
        <button data-testid="app-button" className={`btn btn-${buttonType} ${buttonExtraCSS}`} onClick={onClick}>{buttonText}</button>
    )
}

Button.defaultProps = {
    buttonExtraCSS: 'app-button',
    buttonType: 'light',
    buttonText: 'Button',
    onClick: () => { }
}

Button.propTypes = {
    buttonExtraCSS: PropTypes.string,
    buttonType: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;