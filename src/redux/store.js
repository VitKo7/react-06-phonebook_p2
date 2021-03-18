import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
