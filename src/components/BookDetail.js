// src/components/BookDetail.js
import React from 'react';

const BookDetail = ({ book }) => {
  if (!book) {
    return <p>Select a book to view details.</p>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      {book.image && (
        <div>
          <img src={book.image} alt={book.title} style={{ width: '100px', height: '150px', marginTop: '10px' }} />
        </div>
      )}
      <p><strong>Status:</strong> {book.isRead ? 'Read' : 'Unread'}</p>
    </div>
  );
};

export default BookDetail;
