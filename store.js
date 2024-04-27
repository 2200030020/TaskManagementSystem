// src/store.js
import { createStore, combineReducers } from 'redux';
import AuthReducer from './redux/reducers/AuthReducer'; // Import AuthReducer
import NavReducer from './redux/reducers/NavReducer'; // Import NavReducer

// Combine reducers
const rootReducer = combineReducers({
  auth: AuthReducer,
  nav: NavReducer
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
