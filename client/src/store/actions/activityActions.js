import { FETCH_ACTIVITIES } from './types';


export const fetchActivities = (id) => dispatch =>{
    
    fetch("http://localhost:5000/activities/" + id)
    .then(res => res.json())
    .then (activities => 
        
         dispatch({
            type: FETCH_ACTIVITIES,
            payload: activities,
        }) 
    )

    .catch(err => console.log(err.message))
}
