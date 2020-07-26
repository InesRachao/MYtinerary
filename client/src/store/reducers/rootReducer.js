import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";



const rootReducer = combineReducers({
    cities: citiesReducer, 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer,
    auth: loginReducer,
    userfavs: userReducer });



export default rootReducer;








