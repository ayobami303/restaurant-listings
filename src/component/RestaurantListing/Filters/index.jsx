import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import AppTextHeader from '../../common/AppTextHeader';
import Label from '../../common/Label';
import RadioButton from '../../common/RadioButton';

const Filters = ({ sortBy, orderBy, setSortBy, setOrderBy }) => {

    function onChange(e) {
        if(e.target.name === "sort_by"){
            return setSortBy(e.target.value);
        }
        return setOrderBy(e.target.value);
    }

    function createFilters(filters){
        return filters.map((filter, index) => {
            return (
                <div className="row mb-4" key={index}>
                    <div className="col">
                        <Label labelText={filter.title} labelExtraClass="mb-2"/>
                        {
                            filter.buttons.map((button, index) => {
                                return(
                                    <div className="py-1" key={index}>
                                        <RadioButton data-testid={button.testid} radioButtonName={filter.name} radioButtonValue={button.value} onChange={onChange} isChecked={sortBy===button.value} radioButtonLabel={button.label}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        });
    }

    const filters = [{ 
        title: 'Sort by', 
        name: 'sort_by', 
        buttons: [{ 
            testid: 'sort-by-pricing', 
            value: 'pricing', 
            label: 'Restaurant pricing' 
        }, { 
            testid: 'sort-by-rating', 
            value: 'rating', 
            label: 'Restaurant ratings' 
        }] 
    }, { 
        title: 'Order by', 
        name: 'order_by', 
        buttons: [{ 
            testid: 'order-by-asc', 
            value: 'asc', 
            label: 'Lowest to Highest' 
        }, { 
            testid: 'order-by-desc', 
            value: 'desc', 
            label: 'Highest to Lowest' 
        }] 
    }];

    return (
        <div className="app-bg" data-testid="app-filter">
            <div className="row mb-2">
                <div className="col">
                    <div className="p-3">
                        <div className="row">
                            <div className="col">
                                <AppTextHeader appTextHeaderExtraCSS='h6 text-center' text='Filter'/>
                            </div>
                        </div>
                        {createFilters(filters)}
                    </div>
                </div>
            </div>
        </div>
    );
}

Filters.defaultProps = {
    sortBy: '',
    orderBy: '',
    setSortBy: () => { },
    setOrderBy: () => { }
};

Filters.propTypes = {
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
    setOrderBy: PropTypes.func.isRequired
};

export default Filters;
