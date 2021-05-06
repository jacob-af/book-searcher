import React, { useEffect, useState } from "react";
import SavedBook from "../components/SavedBook";
import API from "../utils/API";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  const deleteBook = _id => {
    console.log(_id);
    setSavedBooks(savedBooks.filter(book => book._id !== _id));
    API.deleteBook(_id);
  };

  useEffect(() => {
    API.getBooks().then(books => {
      setSavedBooks(books.data);
    });
  }, []);

  return (
    <div className="result">
      <p className="text-left ml-3">Saved Books</p>
      {savedBooks[0] ? (
        savedBooks.map(book => (
          <SavedBook book={book} deleteBook={deleteBook} key={book.id} />
        ))
      ) : (
        <div className="result">
          <p>No saved Books</p>
        </div>
      )}
    </div>
  );
};

export default Saved;
