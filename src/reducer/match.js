import produce from "immer";
import {EPL} from '../eplFixtures'

const matchList = Object.values(EPL.matches)

export default (state = matchList, action) => {
    const {type} = action
    return produce(state, draft => {
    	switch (type) {

    	}
    });
   return state;
};


