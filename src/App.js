import './App.css';
import React, {useState} from "react"
import SearchForm from "./components/searchForm"
import ResultsContainer from "./containers/resultsContainer"
import Pagination from "./components/pagination"
import Loader from './components/loader';

const App = () => {

  const [results, setResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalBooks, setTotalBooks] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [loader, setLoader] = useState(false)

  const fetchBooks = async (currentPage, searchTerm) => {
    setLoader(true)
    await fetch(`https://goodreads-server-express--dotdash.repl.co/search/${searchTerm}?page=${currentPage}`)
    .then(res => res.json())
    .then(json => {
      setResults(json.list)
      setTotalBooks(json.total)
      setSearchTerm(searchTerm)
      setLoader(false)
    })
  }

  // Queries API based on search term entered into form.
  
  const handleSearch = (event, searchTerm) => {
    event.preventDefault()
    fetchBooks(currentPage, searchTerm)
  } 

  // Queries API based on search term entered into form and page of search results selected.
  
  const paginate = (event, pageNumber) => {
    event.preventDefault()
    setCurrentPage(pageNumber)
    fetchBooks(pageNumber, searchTerm)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <h1 id="title">Book Results 📚📖📕</h1>
      <SearchForm handleSearch={handleSearch}/>
      {loader ? <Loader/> : null}
      <ResultsContainer results={results}/>
      <Pagination totalBooks={totalBooks} paginate={paginate}/>
    </div>
  );
}

export default App;
