import { FETCH_ITINERARIES, NEW_ITINERARY } from './types';


export const fetchItineraries = (id) => dispatch =>{
    
    fetch(`http://localhost:5000/itineraries/${id}`)
    .then(res => res.json())
    .then ( itineraries => 
        
        dispatch({
            type: FETCH_ITINERARIES,
            payload: itineraries,
        })
    )
}