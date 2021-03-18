import types from './contacts-types';

export const handleInput = item => ({
  type: types.INPUT,
  payload: item,
});

export const createContact = contact => ({
  type: types.CREATE,
  payload: contact,
});

export const handleRemove = id => ({
  type: types.REMOVE,
  payload: id,
});
