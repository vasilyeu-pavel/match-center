import produce from "immer";
import {normalizedMatch} from '../fixtures'

export default (state = normalizedMatch, action) => {
    const {type} = action
    return produce(state, draft => {
    	switch (type) {

    	}
    });
   return state;
};


