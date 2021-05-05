import React from "react";

const SavedBook = ({
  deleteBook,
  book: { title, authors, description, previewLink, thumbnail, _id }
}) => {
  return (
    <div className="row">
      <div className="col-3">
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
      </div>
      <div className="col-9">
        <p>{description}</p>
        <p>
          Preview at: <a href={previewLink}>{title}</a>
        </p>
        <button onClick={() => deleteBook(_id)}>Delete</button>
      </div>
    </div>
  );
};

export default SavedBook;
