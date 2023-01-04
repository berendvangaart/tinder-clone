import { combineReducers } from 'redux';
import counterReducer from "./counter/counter.reducer";
import profileDetailsReducer from "./profile-details/profileDetails.reducer";
import userReducer from "./user/user.reducer";


const rootReducer = combineReducers({
    counter:  counterReducer,
    profileDetails: profileDetailsReducer,
    user: userReducer
});

export default rootReducer;
