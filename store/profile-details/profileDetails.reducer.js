import {SET_BIO, SET_FIRS_NAME, SET_LAST_NAME, SET_PHOTO} from "./profileDetails.types";

const INITIAL_STATE = {
    image: null,
    firstName: '',
    lastName: '',
    bio: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_FIRS_NAME:
            return {
                ...state,
                firstName: action.payload,
            };
        case SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            };
        case SET_BIO:
            return {
                ...state,
                bio: action.payload,
            };
        case SET_PHOTO:
            return {
                ...state,
                image: action.payload,
            };
        default:
            return state;
    }

};


export default reducer;
