import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import todoReducer from './reducers/todoReducer';
const rootReducer = combineReducers({
    authReducer,
    todoReducer,
});

export default rootReducer;
