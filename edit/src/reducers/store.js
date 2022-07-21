import {createStore, combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import todosReducer from './todosReducer';
import {configureStore} from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   todosReducer,
//   counterReducer,
// });

// export default createStore(rootReducer);

export default configureStore({
  reducer: {
    todosReducer,
    counterReducer
  }
});