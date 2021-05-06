import React, { useRef } from "react";

import API from "../utils/API";

const SearchForm = ({ setResults }) => {
  const inputRef = useRef();
  const searchBooks = event => {
    event.preventDefault();
    API.searchBooks(inputRef.current.value)
      .then(books => {
        console.log(books.data.items);
        setResults(books.data.items);
      })
      .catch(error => {
        alert(error.message);
        setResults([]);
      });
  };
  return (
    <form id="form" action="">
      <h5 className="text-left">Book Search</h5>
      <div>
        <p className="text-left">books</p>
        <input id="input" autoComplete="off" ref={inputRef} />
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button class="btn btn-outline-dark btn-sm" onClick={searchBooks}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
