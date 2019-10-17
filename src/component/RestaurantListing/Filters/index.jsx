import React, { useState } from 'react';

import './styles.scss';
import AppTextHeader from '../../common/AppTextHeader';
import Label from '../../common/Label';
import RadioButton from '../../common/RadioButton';

const Filters = (props) => {
    const [sortBy, setSortBy] = useState('');
    const [orderBy, setOrderBy] = useState('');

    function onChange(e) {
        if(e.target.name === "sort_by"){
            return setSortBy(e.target.value);
        }
        return setOrderBy(e.target.value);
    }

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
                        <div className="row mb-4">
                            <div className="col">
                                <Label labelText="Sort by" labelExtraClass="mb-2"/>
                                <div className="py-1">
                                    <RadioButton radioButtonName="sort_by" radioButtonValue="pricing" onChange={onChange} isChecked={sortBy==="pricing"} radioButtonLabel="Restaurant pricing"/>
                                </div>
                                <div className="py-1">
                                    <RadioButton radioButtonName="sort_by" radioButtonValue="rating" onChange={onChange} isChecked={sortBy==="rating"} radioButtonLabel="Restaurant ratings"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Label labelText="Order by" labelExtraClass="mb-2"/>
                                <div className="py-1">
                                    <RadioButton radioButtonName="order_by" radioButtonValue="desc" onChange={onChange} isChecked={orderBy==="desc"} radioButtonLabel="Highest to Lowest"/>
                                </div>
                                <div className="py-1">
                                    <RadioButton radioButtonName="order_by" radioButtonValue="asc" onChange={onChange} isChecked={orderBy==="asc"} radioButtonLabel="Lowest to Highest"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Filters;
