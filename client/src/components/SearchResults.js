import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <div>
          <p>{result.volumeInfo.title}</p>
          <p>{result.volumeInfo.description}</p>
          <p>
            Preview at:{" "}
            <a href={result.volumeInfo.previewLink}>
              {result.volumeInfo.title}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Results;
