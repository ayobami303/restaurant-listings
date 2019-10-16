import React from 'react';
import PropTypes from 'prop-types';


const AppTextHeader = ({appTextHeaderExtraCSS, text}) => {
    return (
        <h1 data-testid="app-text-header" className={`${appTextHeaderExtraCSS}`}>{text}</h1>
    )
}

AppTextHeader.defaultProps = {
    appTextHeaderExtraCSS: 'app-text-header h1',
    text: 'App text header',
}

AppTextHeader.propTypes = {
    appTextHeaderExtraCSS: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default AppTextHeader;