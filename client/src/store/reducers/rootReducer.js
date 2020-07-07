import { combineReducers } from "redux";
import citiesReducer from "../reducers/citiesReducer";
import itinerariesReducer from "../reducers/itinerariesReducer";
import activitiesReducer from "../reducers/activitiesReducer";
import createaccountReducer from "../reducers/createaccountReducer";


const rootReducer = combineReducers({
    cities: citiesReducer, 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer, 
    user: createaccountReducer,
});

export default rootReducer;