import React from 'react';

import './styles.scss';
import Category from './Category';
import Filters from './Filters';
import RestaurantSearchResult from './RestaurantSearchResult';
import RestaurantSearchBox from "./RestaurantSearchBox";


const RestaurantListing = () => {

  const listing = {
    imageUrl: 'https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png',
    cardTitle: 'Card Title', 
    cardContent: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
    id: 1
  };
    const sampleData = [
      {...listing, id: 1},
      {...listing, id: 2},
      {...listing, id: 3},
      {...listing, id: 4},
      {...listing, id: 5},
      {...listing, id: 6}
    ];
    return (
        <div className="listings">
            <div className="row">
                <div className="col-3">
                    <Category />
                    <Filters/>
                </div>
                <div className="col-9">
                    <RestaurantSearchBox />
                    <RestaurantSearchResult results={sampleData} />
                </div>
            </div>
        </div>
    );
}
 
export default RestaurantListing;