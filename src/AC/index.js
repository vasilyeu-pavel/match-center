import { SELECTED_ROUND, } from "../constants";

export function selectedRound (data) {
    return {
        type: SELECTED_ROUND,
        payload: data
    };
}
