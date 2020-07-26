import { LOGIN_SUCCESS, USER_LOADER, SET_CURRENT_USER, LOGOUT_SUCCESS } from "../actions/types";


const initialState = {
    auth: {},
    user: {}
}

export default function(state = initialState, action){
   
    switch(action.type){
        
        case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token)
            
            return {
                ...state, 
                auth: action.payload
            }

        case USER_LOADER: 
            return {
                ...state,
                user: action.payload
            };

        
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            };
        
        
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token")
            return{
                ...state,
            }
            
        default:
            return state;
    }

}