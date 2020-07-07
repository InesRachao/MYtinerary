import { REGISTER_SUCCESS, NEW_USER } from '../actions/types';


const initialState = {
    user: {}
}

export default function(state = initialState, action){
   
    switch(action.type){
        
        case REGISTER_SUCCESS:
            
            return {
                ...state, 
                user: action.payload
            }
            
        default:
            return state;
    }

}