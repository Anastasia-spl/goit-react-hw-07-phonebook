import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import contactsReducer from './contacts';

const middleWare = [
  ...getDefaultMiddleware(), logger]


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleWare,
  devTools: process.env.NODE_ENV === "development",
});


export default store ;
