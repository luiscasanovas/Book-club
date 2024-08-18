import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = ({ IBSN, title, author, originalPublicationYear }) => {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        // Fetch book details from Google Books API using ISBN
        const googleBooksResponse = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${IBSN}`
        );

        if (googleBooksResponse.data.totalItems === 0) {
          throw new Error('No book found for the provided ISBN.');
        }

        const bookInfo = googleBooksResponse.data.items[0].volumeInfo;

        // Use the cover image from Google Books API
        const coverUrl = bookInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150?text=No+Cover';

        setBookData({
          cover: coverUrl,
          title: bookInfo.title,
          author: bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author",
          pageCount: bookInfo.pageCount || "Unknown Page Count",
          publishedDate: bookInfo.publishedDate || originalPublicationYear,
          link: bookInfo.infoLink,
        });
      } catch (error) {
        console.error('Error fetching book data:', error);
        setError('Could not fetch book data. Please check the ISBN or try again later.');
      }
    };

    fetchBookData();
  }, [IBSN, originalPublicationYear]); // Include originalPublicationYear in the dependency array

  return (
    <div className="book">
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : bookData ? (
        <div>
          <h3>{bookData.title}</h3>
          <h4>by {bookData.author}</h4>
          <img 
            src={bookData.cover} 
            alt={title} 
          />
          <p>Original Publication Year: {bookData.publishedDate}</p>
          <p>Number of Pages: {bookData.pageCount}</p>
          <a href={bookData.link} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Book;
