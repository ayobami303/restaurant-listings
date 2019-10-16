import React from 'react';
import PropTypes from 'prop-types';

const Range = ({rangeExtraClass, rangeName, rangeMin, rangeMax, rangeStep, rangeValue, onChange}) => {

    return (
        <input type="range" min={rangeMin} onChange={onChange} max={rangeMax} step={rangeStep} value={rangeValue} className={`custom-range ${rangeExtraClass}`} name={rangeName} data-testid="app-range"/>
    );
}

Range.defaultProps = {
    rangeExtraClass: 'app-range', 
    rangeName: 'app_range', 
    rangeMin: 0, 
    rangeMax: 100,
    rangeValue: 10, 
    onChange: () => {}
};

Range.propTypes = {
    rangeExtraClass: PropTypes.string, 
    rangeName: PropTypes.string, 
    rangeMin: PropTypes.number.isRequired,
    rangeMax: PropTypes.number.isRequired,
    rangeStep: PropTypes.number,
    rangeValue: PropTypes.number.isRequired, 
    onChange: PropTypes.func.isRequired
}

export default Range;