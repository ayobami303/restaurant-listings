import React from 'react';
import PropTypes from 'prop-types';


const Button = ({buttonExtraCSS, buttonType, buttonText, dataTest, onClick}) => {
    return (
        <button data-test={`${dataTest}-button`} className={`btn btn-${buttonType} ${buttonExtraCSS}`} onClick={onClick}>{buttonText}</button>
    )
}

Button.defaultProps = {
    buttonExtraCSS: '',
    buttonType: 'light',
    buttonText: 'Button',
    dataTest: 'app',
    onClick: () => { console.log('button clicked') }
}

Button.propTypes = {
    buttonType: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;