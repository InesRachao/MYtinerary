import { LOGIN_SUCCESS, USER_LOADER } from "../actions/types";


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


            
        default:
            return state;
    }

}