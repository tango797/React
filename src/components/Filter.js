// src/components/Filter.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';

const Filter = ({ onEdit }) => {
  const [filter, setFilter] = useState('all');
  const books = useSelector((state) => state.books.books);

  const filteredBooks = books.filter(book => 
    filter === 'all' ? true : filter === 'read' ? book.isRead : !book.isRead
  );

  return (
    <div>
      <label>Filter:</label>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
      <BookList books={filteredBooks} onEdit={onEdit} />
    </div>
  );
};

export default Filter;
