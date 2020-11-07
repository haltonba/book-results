import React from "react"

const Book = ({book}) => {

  return (
    <div className="grid-item">
        <img src={book.imageUrl}/>
        <ul>
          <li style={{marginTop: "20px"}}><span className="title-author">Title:</span> {book.title}</li>
          <li><span className="title-author">Author:</span> {book.authorName}</li>
        </ul>
    </div>
  );
}

export default Book;
