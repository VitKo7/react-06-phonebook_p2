import { combineReducers } from 'redux';
import types from './contacts-types';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.CREATE:
      return [...state, payload];

    case types.REMOVE:
      return [...state.filter(contact => contact.id !== payload)];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.INPUT:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
