import { combineReducers } from 'redux';
import counterReducer from "./counter/counter.reducer";
import profileDetailsReducer from "./profile-details/profileDetails.reducer";


const rootReducer = combineReducers({
    counter:  counterReducer,
    profileDetails: profileDetailsReducer
});

export default rootReducer;
