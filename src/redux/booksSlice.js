// src/redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, updatedDetails } = action.payload;
      const bookIndex = state.books.findIndex(book => book.id === id);
      if (bookIndex >= 0) {
        state.books[bookIndex] = { ...state.books[bookIndex], ...updatedDetails };
      }
    },
    toggleReadStatus: (state, action) => {
      const bookIndex = state.books.findIndex(book => book.id === action.payload);
      if (bookIndex >= 0) {
        state.books[bookIndex].isRead = !state.books[bookIndex].isRead;
      }
    },
  },
});

export const { addBook, updateBook, toggleReadStatus } = booksSlice.actions;

export default booksSlice.reducer;
