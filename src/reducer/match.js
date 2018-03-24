import produce from "immer";

const stateTest = {
    matches: []
};

export default (state = stateTest, action) => {
    const {type} = action
    return produce(state, draft => {
    	switch (type) {

    	}
    });
   return state;
};


