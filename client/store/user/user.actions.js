import {ADD_MATCH, SET_USER} from "./user.types";

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    };
};

export const addMatch = (matchID) => {
    return {
        type: ADD_MATCH,
        payload: matchID
    };
};