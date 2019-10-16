import React from 'react';
import DropDown from '../../common/Dropdown';
import InputBox from '../../common/Input';
import Button from '../../common/Button';
import Label from '../../common/Label';
import './styles.scss';

const RestaurantSearchBox = () => {

  const options = [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}];
  return ( 
    <div className="restaurant app-bg">
      {/* header component, to would be refactored */}
      <div className="header"> 
        <Label labelExtraClass="" labelText="Filter By" />
        <DropDown dropdownExtraClass="" dropdownOptions={options} />
        <InputBox />
        <Button buttonText="secondary" buttonExtraCSS="" />
      </div>
      {/* content component, to be refactored also */}
      <div className="content">
        
      </div>
    </div>
   );
}
 
export default RestaurantSearchBox;