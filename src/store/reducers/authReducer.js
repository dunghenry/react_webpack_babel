const initialState = {
    currentUser: {},
    loading: false,
    error: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
}

export default authReducer;
