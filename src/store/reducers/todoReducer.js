const initialState = {
    todos: undefined,
    loading: false,
    error: false,
    todo: {},
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload,
            };
        case 'GET_TODO':
            return {
                ...state,
                todo: action.payload,
            };
        default:
            return state;
    }
}

export default todoReducer;
