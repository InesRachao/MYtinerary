import { combineReducers } from "redux";
import citiesReducer from "../reducers/citiesReducer";
import itinerariesReducer from "../reducers/itinerariesReducer";
import activitiesReducer from "../reducers/activitiesReducer";
import loginReducer from "./loginReducer";


const rootReducer = combineReducers({
    cities: citiesReducer, 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer, 
    auth: loginReducer,
});

export default rootReducer;