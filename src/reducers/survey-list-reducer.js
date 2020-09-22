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
                    // question1: question1,
                    // question2: question2,
                    // question3: question3,
                    // question4: question4,
                    // question5: question5,
                    // id: 1
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