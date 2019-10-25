import { useState, useEffect } from 'react';
import useDebounce from './use-debounce';
import * as api from '../../api';

const useFetchLocation = (value) => {
  const [notification, setNotification] = useState('Enter Location to search');
  const [searchResults, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(value, 500);

  
  useEffect(() => {
    const fetchLocation = async(search) => {
      if (!search) return;
      setNotification('Fetching locations ... ');
      try {
        const response = await api.getLocations({name: search});
        response.location_suggestions.length === 0 ? setNotification('No locations found') : setNotification('');
        
        setSearchResult(response.location_suggestions)
      } catch(ex) {
        setNotification('Error fetching location');
        setError(ex.message);
      }
    }
    if (debouncedSearchTerm)
      fetchLocation(debouncedSearchTerm);
    else
      setSearchResult([])
    fetchLocation();
  }, [debouncedSearchTerm]);


  return {
    notification, searchResults, error, value
  }
}
 
export default useFetchLocation;
