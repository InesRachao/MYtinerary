import {FETCH_COMMENTS, COMMENT_SUCCESS, COMMENT_DELETE, COMMENT_UPDATE} from "../actions/types";

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
        
        case COMMENT_SUCCESS:

            return {
                ...state,
                comment: action.payload
                
                
            }
        
        case COMMENT_DELETE:

            return {
                ...state,
                comment: action.payload
               
            }

        case COMMENT_UPDATE:

            return{
                ...state,
                comment: action.payload
            }
            
        default:
            return state;
    }

}