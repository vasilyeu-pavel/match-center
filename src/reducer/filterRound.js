import produce from "immer";
import {SELECTED_ROUND} from '../constants'

export default (state = [], action) => {
    const {type} = action
    return produce(state, draft => {
    	switch (type) {
    		case SELECTED_ROUND: return action.payload 
    	}
    });
    return state
};


