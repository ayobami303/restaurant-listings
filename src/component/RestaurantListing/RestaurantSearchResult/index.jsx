import React, { useEffect } from 'react';
import './styles.scss';
import Cards from './cards';

export const RestaurantSearchResult = ({restaurantResult}) => {
    const onClick = () => { };

    useEffect(() => { // scroll this component to top on update
        window.scrollTo(0, 0)
    }, [restaurantResult])

    return (
        <div className="restaurant-result app-bg" data-testid="app-results">
            { restaurantResult && 
                restaurantResult.map(
                    ({featured_image, name, cuisines, user_rating, phone_numbers, highlights, location, id}) => 
                        <Cards 
                            key={id}
                            imageUrl={featured_image}
                            cardTitle={name}
                            cuisines={cuisines}
                            user_rating={user_rating}
                            phone_numbers={phone_numbers}
                            highlights={highlights}
                            location={location}
                            onClick={onClick}
                        /> 
                    )}
		</div>
	);
}
 
export default RestaurantSearchResult;