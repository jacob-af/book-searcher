import React from "react";

const SavedBook = ({
  deleteBook,
  book: { title, authors, description, previewLink, thumbnail, _id }
}) => {
  return (
    <div className="savedBooks p-4">
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
            className="btn btn-outline-dark btn-sm mr-2"
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>

          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => deleteBook(_id)}
          >
            Delete
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

export default SavedBook;
