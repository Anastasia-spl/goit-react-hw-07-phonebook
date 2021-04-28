import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector([getFilter, getContacts],
  (filter, contacts) =>
    filter !== ''
      ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      )
      : contacts);

//eslint-disable-next-line 
export default { getContacts, getFilter, getFilteredContacts }