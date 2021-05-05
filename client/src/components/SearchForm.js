import React, { useRef } from "react";

import API from "../utils/API";

const SearchForm = ({ setResults }) => {
  const inputRef = useRef();
  const searchBooks = event => {
    event.preventDefault();
    API.searchBooks(inputRef.current.value).then(books => {
      console.log(books.data.items);
      setResults(books.data.items);
    });
  };
  return (
    <form id="form" action="">
      <input id="input" autoComplete="off" ref={inputRef} />
      <button onClick={searchBooks}>Search</button>
    </form>
  );
};

export default SearchForm;
