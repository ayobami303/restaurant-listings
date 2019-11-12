import React, { useState } from "react";

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
import { is } from "@babel/types";


export const RestaurantListing = ({ categories }) => {
    const [searchItem, setSearchItem] = useState('');
    const { checkedCategories, setCheckedCategories } = useCategory();
    const { sortBy, setSortBy, orderBy, setOrderBy, searchBy, setSearchBy } = useFilter();
    const { searchResults, isFetching } = useFetchLocation(searchItem);
    // const {results_found, results_shown, results_start} = restaurantListings;
    const {
        restaurantListings,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        isGettingRestaurantListings
    } = useRestaurantListings(checkedCategories, sortBy, orderBy, searchBy);

    function searchRestaurantBySortType(sortType) {
        setPage(0);
        switch(sortType) {
            case 'Location': setSearchBy(searchItem); break;
            case 'Restaurant': setSearchBy(searchItem); break;
            default: break;
        }
    }

    async function fetchSortBy(value) {
        setSearchItem(value);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value));
    };

    const responseHandle = (message) => (<div className="centralize"> {message} </div>)

    const restaurantResults = () => (
        restaurantListings.results_found && !isGettingRestaurantListings ?
        <RestaurantSearchResult 
            listings={restaurantListings}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
    /> : !isGettingRestaurantListings? 
        responseHandle('No restaurants Found') : 
        responseHandle('Fetching Restaurants ...')
    )

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
                        isFetching={isFetching}
                        action={fetchSortBy}
                        searchRestaurant={searchRestaurantBySortType}
                    />
                    {restaurantResults()}
                </div>
            </div>
        </div>
    );
};

export default HigerOC(RestaurantListing);