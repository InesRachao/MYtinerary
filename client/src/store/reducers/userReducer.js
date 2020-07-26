import { REGISTER_SUCCESS, FETCH_FAVOURITES, FAVOURITE_SUCCESS, FAVOURITE_REMOVE} from "../actions/types"


const initialState = {
    favouritesItn:[]
}
   
export default function(state = initialState, action) {
    switch(action.type) {
        
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            console.log("reducer"); 
            return {
                ...state,
                
            };
        
        case FETCH_FAVOURITES:
            return {
                ...state,
                favouritesItn: action.payload
            };
        
        case FAVOURITE_SUCCESS:
            return {
                ...state,
                favouritesItn: action.payload
            };
        
        case FAVOURITE_REMOVE:
            return {
                ...state,
                favouritesItn: action.payload
            };
        
        
        default:
            return state;
    }
}








