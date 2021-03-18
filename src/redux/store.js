import { createStore, combineReducers } from 'redux';
// import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

import types from './contacts/contacts-types';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.INPUT:
//       return {
//         ...state,
//         filter: payload,
//       };

//     case types.CREATE:
//       return {
//         ...state,
//         contacts: [...state.contacts, payload],
//       };

//     case types.REMOVE:
//       return {
//         ...state,
//         contacts: [...state.contacts.filter(contact => contact.id !== payload)],
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, composeWithDevTools());

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
