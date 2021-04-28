import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';

const { fetchContactsSuccess, addContactSuccess, deleteContactSuccess , filterContact} = contactsActions;


const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess] : (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
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