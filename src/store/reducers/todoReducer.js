const initialState = {
    todos: undefined,
    loading: false,
    error: false,
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}

export default todoReducer;
