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
      thumbnail: thumbnail || "https://via.placeholder.com/128x129.png"
    };
    API.saveBook(data);
  };
  return (
    <div className="result p-4">
      <div className="row">
        <div className="col-10">
          <h2 className="text-left">{title}</h2>
          <h5 className="text-left">
            {authors ? (
              authors.map(author => {
                return <span key={author}>{author}</span>;
              })
            ) : (
              <div>!</div>
            )}
          </h5>
        </div>
        <div className="col-2">
          <a
            className="btn btn-outline-dark btn-sm pr-2"
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>

          <button className="btn btn-outline-dark btn-sm" onClick={saveBook}>
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img src={thumbnail || ""} alt="book cover" />
        </div>
        <div className="col-10">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
