// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../redux/booksSlice';

const BookForm = ({ currentBook, setCurrentBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isRead, setIsRead] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setIsRead(currentBook.isRead);
      setImagePreview(currentBook.image);
    } else {
      resetForm();
    }
  }, [currentBook]);

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setIsRead(false);
    setImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: currentBook ? currentBook.id : Date.now(),
      title,
      author,
      isRead,
      image: imagePreview,
    };
    if (currentBook) {
      dispatch(updateBook({ id: currentBook.id, updatedDetails: newBook }));
    } else {
      dispatch(addBook(newBook));
    }
    resetForm();
    setCurrentBook(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentBook ? 'Edit Book' : 'Add Book'}</h2>
      <div>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isRead}
            onChange={(e) => setIsRead(e.target.checked)}
          />
          Mark as Read
        </label>
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && (
          <div>
            <img src={imagePreview} alt="Book cover preview" style={{ width: '100px', height: '150px', marginTop: '10px' }} />
          </div>
        )}
      </div>
      <button type="submit">{currentBook ? 'Update Book' : 'Add Book'}</button>
      {currentBook && (
        <button type="button" onClick={() => setCurrentBook(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default BookForm;
