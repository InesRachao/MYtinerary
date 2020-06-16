import { FETCH_CITIES, NEW_CITY } from './types';


export const fetchCities = () => dispatch =>{
    
    fetch("http://localhost:5000/cities/all")
    .then(res => res.json())
    .then (cities => 
        
        dispatch({
            type: FETCH_CITIES,
            payload: cities,
        })
    )
}