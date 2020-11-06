import React, {useState} from "react"

const SearchForm = ({handleSearch}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    // Clears form input on submit.

    const handleSearchFormReset = (event) => {
        handleSearch(event, searchTerm)
        setSearchTerm("")
    }

  return (
    <form id="search-form" onSubmit={(event) => handleSearchFormReset(event)}>
        <input id="book-input" type="text" placeholder="Enter Search Term" value={searchTerm} onChange={handleChange}/>
        <input id="search-button" type="submit" value="Search"/>
    </form>
  );
}

export default SearchForm;
