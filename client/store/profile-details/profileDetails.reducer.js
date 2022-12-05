import {SET_DETAIL_PAGE, SET_PROFILE} from "./profileDetails.types";

const INITIAL_STATE = {
    image: null,
    firstName: '',
    lastName: '',
    bio: '',
    password: '',
    email: '',
    linkedin: '',
    jobTitle: '',
    phone: ''
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_DETAIL_PAGE:
            return {
                ...state,
                image: action.payload.img,
                bio: action.payload.bio,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        case SET_PROFILE:
            return {
                ...state,
                password: action.payload.password,
                email: action.payload.email,
                linkedin: action.payload.linkedin,
                jobTitle: action.payload.jobTitle,
                phone: action.payload.phone
            }
        default:
            return state;
    }

};


export default reducer;
