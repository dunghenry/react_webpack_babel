import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
const middleware = [logger];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
