import React from 'react';
import booksData from '../books.json';
import Book from './Book';

const BookList = () => {
  return (
    <div className="book-list">
      {booksData.map((book) => (
        <Book 
          key={book.id} 
          IBSN={book.IBSN} 
          title={book.title} 
          author={book.author} 
          originalPublicationYear={book.originalPublicationYear} // Ensure this line is correct
        />
      ))}
    </div>
  );
};

export default BookList;
