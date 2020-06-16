import { FETCH_ITINERARIES, NEW_ITINERARY} from '../actions/types';


const initialState = {
    itineraries: [],
    itinerary: {}
}

export default function(state = initialState, action){
   
    switch(action.type){
        
        case FETCH_ITINERARIES:
            
            return {
                ...state, 
                itineraries: action.payload
            }
            
        default:
            return state;
    }

}