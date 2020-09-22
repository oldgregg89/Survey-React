import * as c from './../actions/ActionTypes';

let initialState = {
    surveys: [],
    error: null
}

export default (state = initialState, action ) => {
       switch (action.type){
        case c.ADD_CUSTOMER: 
            return Object.assign({}, state, {
                [id]: {
                    name: name
                }
            });
        case c.DELETE_CUSTOMER:
            const newState = { ...state };
            delete newState[id];
            return newState;
        default: 
            return state;
    }
};