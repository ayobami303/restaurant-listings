import React from 'react';
import PropTypes from 'prop-types';

const Label = ({labelExtraClass, labelText}) => {
    return (
        <label data-testid="app-label" className={`form-check-label ${labelExtraClass}`}>{labelText}</label>
    )
};

Label.defaultProps = {
    labelExtraClass: 'app-label',
    labelText: 'App label'
};

Label.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelExtraClass: PropTypes.string
};

export default Label;