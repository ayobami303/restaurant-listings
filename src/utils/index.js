import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-testid='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const querybuilder = (checkedCategories, page, rowsPerPage, sortBy, orderBy, searchBy) => {
    let query=`?count=${rowsPerPage}&start=${page * rowsPerPage}&`;

    if (checkedCategories.length > 0) {
        var filtered = checkedCategories.filter((el) =>  el != null );
        const categoryIds = filtered.join(',');
        query += `?category=${categoryIds}`;
    }
    if (sortBy) query += `sort=${sortBy}`
    if (orderBy) query += `order=${orderBy}`;
    if (searchBy) query += `q=${searchBy}`;
    return query;
    // if (searchBy) query = `${query}q=${searchBy}`
    // return query;
}

export const filterRestaurantResult = (result) => {
    const newResult = result.restaurants.map(({ restaurant}) => {
        const obj = {
            all_reviews: restaurant.all_reviews,
            all_reviews_count: restaurant.all_reviews_count,
            cuisines: restaurant.cuisines,
            featured_image: restaurant.featured_image,
            highlights: restaurant.highlights,
            id: restaurant.id,
            location: restaurant.location,
            name: restaurant.name,
            phone_numbers: restaurant.phone_numbers,
            photo_count: restaurant.photo_count,
            photos: restaurant.photos,
            thumb: restaurant.thumb,
            timings: restaurant.timings,
            user_rating: restaurant.user_rating,
            currency: restaurant.currency,
            cost_for_two: restaurant.average_cost_for_two,
        };
        return obj;
    })
    return  { restaurants: newResult, results_found: result.results_found, results_shown: result.results_shown, results_start: result.results_start };
}
