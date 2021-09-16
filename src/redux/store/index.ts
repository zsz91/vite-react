import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducer';
import reduxPromise  from 'redux-promise';
export default createStore(reducers, {}, applyMiddleware(reduxPromise));
