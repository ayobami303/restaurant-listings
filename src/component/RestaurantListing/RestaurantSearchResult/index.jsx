import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Cards from './cards'

const RestaurantSearchResult = ({ results }) => {

  const onClick = () => { };

  return (
    <div className="restaurant-result app-bg" data-testid="app-results">
      { results.map(({image, title, content, id}) => <Cards key={id} imageUrl={image} cardTitle={title} cardContent={content} onClick={onClick} />)}
    </div>
   );
}

RestaurantSearchResult.propTypes = {
  results: PropTypes.array,
}

 
export default RestaurantSearchResult;