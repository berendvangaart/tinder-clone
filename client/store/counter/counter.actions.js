import {INCREMENT, DECREMENT} from "./counter.types";

export const increaseCounter = (amount) => {
    return {
        type: INCREMENT,
        payload: amount
    };
};

export const decreaseCounter = (amount) => {
    return {
        type: DECREMENT,
        payload: amount
    };
};
