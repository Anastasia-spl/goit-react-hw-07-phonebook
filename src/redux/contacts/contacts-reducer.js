import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';

const { fetchContactsSuccess, addContactSuccess, deleteContactSuccess , filterContact, fetchContactsRequest, addContactRequest, deleteContactRequest, fetchContactsError, addContactError, deleteContactError} = contactsActions;

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess] : (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [addContactRequest]: () => true,
  [deleteContactRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactError]: () => false,
  [deleteContactError]: () => false, 
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    items,
  filter,
  loading,
    error
})
export default contactsReducer;
  

// const itemsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// ];


// {
//     "id": "id-1",
//     "name": "Rosie Simpson",
//     "number": "459-12-56"
//   },
//   {
//     "id": "id-2",
//     "name": "Hermione Kline",
//     "number": "443-89-12"
//   },
//   {
//     "id": "id-3",
//     "name": "Eden Clements",
//     "number": "645-17-79"
//   }