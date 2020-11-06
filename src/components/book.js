import React from "react"

const Book = ({book}) => {

  return (
    <div className="grid-item">
        <img src={book.imageUrl}/>
        <p style={{marginTop: "20px"}}><span className="title-author">Title:</span> {book.title}</p>
        <p><span className="title-author">Author:</span> {book.authorName}</p>
    </div>
  );
}

export default Book;