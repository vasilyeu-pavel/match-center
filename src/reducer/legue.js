import produce from "immer";
import {normalizedLegue} from '../fixtures'

export default (state = normalizedLegue, action) => {
    const {type} = action
    return produce(state, draft => {
    	switch (type) {

    	}
    });
   return state;
};


