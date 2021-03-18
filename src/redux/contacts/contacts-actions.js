import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';

// export const handleInput = item => ({
//   type: types.INPUT,
//   payload: item,
// });

// export const createContact = contact => ({
//   type: types.CREATE,
//   payload: contact,
// });

// export const handleRemove = id => ({
//   type: types.REMOVE,
//   payload: id,
// });

// ---------------

export const handleInput = createAction(types.INPUT);

export const createContact = createAction(types.CREATE);

export const handleRemove = createAction(types.REMOVE);
