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
    <div>
      {savedBooks.map(book => (
        <SavedBook book={book} deleteBook={deleteBook} key={book.id} />
      ))}
    </div>
  );
};

export default Saved;
