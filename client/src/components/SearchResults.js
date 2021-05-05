import React from "react";
import Result from "./Result";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <Result result={result} key={result.volumeInfo.previewLink} />
      ))}
    </div>
  );
};

export default SearchResults;
