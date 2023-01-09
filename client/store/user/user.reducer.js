import {ADD_MATCH, SET_USER} from "./user.types";
import match from "../../screens/Match";

const INITIAL_STATE = {
    user: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case ADD_MATCH:
            return {
                ...state,
                user: {
                    ...state.user,
                    matches: [...state.user.matches, action.payload],
                },
            };
        default:
            return state;
    }
};

export default reducer;
