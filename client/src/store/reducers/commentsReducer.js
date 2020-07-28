import {FETCH_COMMENTS} from "../actions/types";

const initialState = {
    comments: [],
    comment: {},
}

export default function(state = initialState, action){
   
    switch(action.type){
        
        case FETCH_COMMENTS:
            
            return {
                ...state, 
                comments: action.payload
            }
            
        default:
            return state;
    }

}