import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    add: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleted: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    filtred: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { add, deleted, filtred } = contactSlice.actions;
