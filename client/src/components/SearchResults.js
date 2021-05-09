import React from "react";
import Result from "./Result";

const SearchResults = ({ results }) => {
  return (
    <div className="result">
      <p className="text-left ml-3">Results</p>
      {results ? (
        results.map(result => (
          <Result result={result} key={result.volumeInfo.previewLink} />
        ))
      ) : (
        <div className="result">No Results to Display</div>
      )}
    </div>
  );
};

export default SearchResults;
