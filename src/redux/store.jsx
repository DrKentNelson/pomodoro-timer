import { createStore } from 'redux';
import timerReducer from './reducers/timerReducer';

const store = createStore(timerReducer);

export default store;
