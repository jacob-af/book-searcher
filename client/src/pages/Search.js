import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchForm setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
