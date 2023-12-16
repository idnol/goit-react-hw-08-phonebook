import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    updateQuery: {
      reducer(state, action) {
        return action.payload;
      }
    }
  }
})

export const { updateQuery } = filterSlice.actions;

export const filterSliceReducer = filterSlice.reducer;
