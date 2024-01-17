import React, { useRef } from "react";

import API from "../utils/API";

const SearchForm = ({ setResults }) => {
  const inputRef = useRef();
  const searchBooks = event => {
    event.preventDefault();
    API.searchBooks(inputRef.current.value)
      .then(books => {
        for (let book of books.data.items) {
          console.log(book.hasOwnProperty("volumeInfo"), book.volumeInfo);
          if (book.volumeInfo.imageLinks) {
            book.thumbnail = book.volumeInfo.imageLinks.thumbnail;
          } else {
            book.thumbnail = "https://via.placeholder.com/128x192.png";
          }
        }
        setResults(books.data.items);
      })
      .catch(error => {
        alert("Search error, please try again");
      });
  };
  return (
    <form id="form" action="">
      <h5 className="text-left">Book Search</h5>
      <div>
        <p className="text-left">book</p>
        <input id="input" autoComplete="off" ref={inputRef} />
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-outline-dark btn-sm" onClick={searchBooks}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
