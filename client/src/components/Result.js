import React from "react";
import API from "../utils/API";

const Result = ({
  result: {
    volumeInfo: {
      title,
      authors,
      description,
      previewLink,
      imageLinks: { thumbnail }
    }
  }
}) => {
  const saveBook = event => {
    event.preventDefault();
    const data = {
      title,
      authors,
      description,
      previewLink,
      thumbnail
    };
    API.saveBook(data);
  };
  return (
    <div>
      <div>
        <img src={thumbnail || ""} alt="book cover" />
        {authors ? (
          authors.map(author => {
            return (
              <div key={author}>
                <p>{author}</p>
              </div>
            );
          })
        ) : (
          <div>!</div>
        )}
        <p>{title}</p>
        <p>{description}</p>
        <p>
          Preview at: <a href={previewLink}>{title}</a>
        </p>
      </div>
      <button onClick={saveBook}>Save</button>
    </div>
  );
};

export default Result;
