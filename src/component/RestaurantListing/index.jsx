import React, { useEffect, useState } from "react";

import "./styles.scss";
import Category from "./Category";
import Filters from "./Filters";
import RestaurantSearchResult from "./RestaurantSearchResult";
import RestaurantSearchBox from "./RestaurantSearchBox";
import HigerOC from "../hoc";
import { useCategory } from "../../Store/hooks/useCategory";
import { useRestaurantListings } from "../../Store/hooks/useRestaurantListings";
import { useFilter } from "../../Store/hooks/useFilter";
import useFetchLocation from '../../Store/hooks/fetchLocation';



export const RestaurantListing = ({ categories }) => {
    const [searchItem, setSearchItem] = useState('');
    const { checkedCategories, setCheckedCategories } = useCategory();
    const { sortBy, setSortBy, orderBy, setOrderBy } = useFilter();
    const { restaurantListings, setRestaurantListings } = useRestaurantListings(checkedCategories, sortBy, orderBy);
    const { searchResults, notification } = useFetchLocation(searchItem);


    const listing = {
        imageUrl: "https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png",
        cardTitle: "Card Title",
        cardContent: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        id: 1
    };
    const restaurantResult = [
        { ...listing, id: 1 },
        { ...listing, id: 2 },
        { ...listing, id: 3 },
        { ...listing, id: 4 },
        { ...listing, id: 5 },
        { ...listing, id: 6 }
    ];
    
    const setRestaurants = () => {
        setRestaurantListings(prev => ([ ...prev, ...restaurantResult ]));
    };

    useEffect(() => {
        // fetch restaurants from api
        setTimeout(setRestaurants(), 10000);
        // eslint-disable-next-line

    }, []);

    function searchRestaurantBySortType(sortType) {
        switch(sortType) {
            case 'Location': console.log('hello', searchItem); break;
            case 'Restaurant': console.log('hello', searchItem); break;
            default: break;
        }
    }

    async function fetchSortBy(value) {
        setSearchItem(value);
    }

    return (
        <div className="listings" data-testid="app-restaurant-search-result">
            <div className="row">
                <div className="col-3">
                    <Category
                        checkedCategories={checkedCategories}
                        categories={categories}
                        setCheckedCategories={setCheckedCategories}
                    />
                    <Filters 
                        sortBy={sortBy}
                        orderBy={orderBy}
                        setSortBy={setSortBy}
                        setOrderBy={setOrderBy}
                    />
                </div>
                <div className="col-9">
                    <RestaurantSearchBox
                        search={searchItem}
                        resetSearch={() => setSearchItem('')}
                        searchResults={searchResults}
                        notification={notification}
                        action={fetchSortBy}
                        searchRestaurant={searchRestaurantBySortType}
                    />
                    <RestaurantSearchResult 
                        restaurantResult={restaurantListings}
                    />
                </div>
            </div>
        </div>
    );
};

export default HigerOC(RestaurantListing);
