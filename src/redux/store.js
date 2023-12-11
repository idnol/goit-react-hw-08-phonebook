import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer } from './contactSlice';
import { filterSliceReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSliceReducer,
  filter: filterSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


