import { combineReducers } from "redux";
import citiesReducer from "../reducers/citiesReducer";
import itinerariesReducer from "../reducers/itinerariesReducer";
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer});
export default rootReducer;