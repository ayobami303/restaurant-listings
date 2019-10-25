import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../common/Checkbox';
import AppTextHeader from '../../common/AppTextHeader';
import AppText from '../../common/AppText';

import './styles.scss'


export const Category = ({ categories, checkedCategories, setCheckedCategories }) => {

    function updateCategories(e) {
        const checkedValue = Number(e.target.value);
        if (checkedCategories[checkedValue] >= 0) delete checkedCategories[checkedValue]
        else checkedCategories[checkedValue] = checkedValue;
        setCheckedCategories(prev => ([ ...prev, checkedCategories ]));
    }

    const checkBoxList = categories.length ? categories.map(
        ({ categories: { id, name} }, index) => (
            <div className="mb-1" key={index}>
                <CheckBox data-testid="app-category-item" checkedValue={index} onChange={updateCategories} isChecked={checkedCategories[index] === index} checkboxLabel={name}/>
            </div>
        )
    ) : <AppText data-testid="no-category" text="No Categories found" appTextExtraCSS="text-center" />;

    return (
        <div className="app-bg" data-testid="app-category">
            <div className="row mb-2">
                <div className="col">
                    <div className="p-3">
                        <AppTextHeader appTextHeaderExtraCSS='h6 text-center' text='Category'/>
                        <div>
                            {checkBoxList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Category.defaultProps = {
    categories: [],
    checkedCategories: [],
    updateCategories: () => {}
}

Category.propTypes = {
    categories: PropTypes.array.isRequired,
    checkedCategories: PropTypes.array.isRequired,
    updateCategories: PropTypes.func.isRequired
}

export default Category;