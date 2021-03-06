import React from "react"
import Book from "../components/book"

// Component houses all book results.

const ResultsContainer = ({results}) => {

  const renderResults = () => {
    return results.map((book, index) => <Book key={index} book={book}/>)
  }


  return (
    <div className="grid-container">
      {renderResults()}
    </div>
  );
}

export default ResultsContainer;
