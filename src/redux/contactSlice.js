import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postContact, removeContact } from './api';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(postContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
})

export const contactsSliceReducer = contactSlice.reducer;
