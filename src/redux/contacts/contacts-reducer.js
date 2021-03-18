import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createContact, handleRemove, handleInput } from './contacts-actions';

const contactsReducer = createReducer([], {
  [createContact]: (state, { payload }) => [...state, payload],
  [handleRemove]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [handleInput]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
