import {SET_DETAIL_PAGE, SET_PROFILE} from "./profileDetails.types";

export const inputFormValue = (val) => {
    return {
        type: SET_DETAIL_PAGE,
        payload: val
    };
};

export const profileDetail = (val) => {
    return {
        type: SET_PROFILE,
        payload: val
    };
};


