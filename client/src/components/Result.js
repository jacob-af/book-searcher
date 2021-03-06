import React from "react";
import API from "../utils/API";

const Result = ({
  result: {
    thumbnail,
    volumeInfo: { title, subtitle, authors, description, previewLink }
  }
}) => {
  const saveBook = event => {
    event.preventDefault();
    const data = {
      title,
      subtitle,
      authors,
      description,
      previewLink,
      thumbnail
    };
    API.saveBook(data);
  };
  return (
    <div className="result p-4">
      <div className="row">
        <div className="col-10">
          <h2 className="text-left">{title}</h2>
          <h5 className="text-left">{subtitle}</h5>
          <h4 className="text-left">
            {authors ? (
              authors.map(author => {
                return <span key={author}>{author}</span>;
              })
            ) : (
              <div></div>
            )}
          </h4>
        </div>
        <div className="col-2">
          <a
            className="btn btn-outline-dark btn-sm mr-2"
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
