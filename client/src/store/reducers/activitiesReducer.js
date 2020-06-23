import { FETCH_ACTIVITIES } from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
   
    switch(action.type){
        
        case FETCH_ACTIVITIES:
            
            return {
                ...state, 
                items: action.payload
            }
            
        default:
            return state;
    }

}