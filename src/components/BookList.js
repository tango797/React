// src/components/BookList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleReadStatus } from '../redux/booksSlice';

const BookList = ({ books, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: '1rem' }}>
              <strong>{book.title}</strong> by {book.author}
              {book.image && (
                <div>
                  <img src={book.image} alt={book.title} style={{ width: '50px', height: '75px', marginTop: '10px' }} />
                </div>
              )}
              <div>
                <button onClick={() => onEdit(book)}>Edit</button>
                <button onClick={() => dispatch(toggleReadStatus(book.id))}>
                  Mark as {book.isRead ? 'Unread' : 'Read'}
                </button>
              </div>
              <small>{book.isRead ? 'Read' : 'Unread'}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
