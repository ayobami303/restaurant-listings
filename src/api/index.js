import axios from "axios";

export const api = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1/",
    timeout: 10000,
    headers: { "Accept": "application/json", "user-key": "0e352334b8987d5e111368dcd8e3607a" },
})


export const getLocations = async ({name, count=10}) => {
    try {
        const { data } = await api.get(`locations?query=${name}&count=${count}`);
        return data;
    } catch(ex) {
        throw new Error(ex);
    }
}

export const getRestaurantListing = async () => {
    try {
        const { data } = await api.get('search');
        return data;
    } catch (error) {
        throw new Error(error);
    }
}