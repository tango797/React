import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import Filter from './components/Filter';

const App = () => {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <div className="container">
      <h1>Book Management App</h1>
      <BookForm currentBook={currentBook} setCurrentBook={setCurrentBook} />
      <BookDetail book={currentBook} />
      <Filter onEdit={setCurrentBook} />
    </div>
  );
};

export default App;
