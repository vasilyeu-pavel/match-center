import produce from "immer";
import {EPL} from '../eplFixtures'

export default (state = EPL, action) => {
    const {type} = action
    return produce(state, draft => {
    	switch (type) {

    		default: return state;
    	}
    });
};


