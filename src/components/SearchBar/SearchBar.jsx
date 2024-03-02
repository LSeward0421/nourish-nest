import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setErrorMessage("");
    onClear("");
  };

  const validateSearchTerm = () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      return trimmedSearchTerm;
    } else {
      setErrorMessage("Please enter a search term.");
      return null;
    }
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    const validSearchTerm = validateSearchTerm();
    if (validSearchTerm) {
      onSearch(validSearchTerm);
      setSearchTerm("");
    }
  };

  return (
    <form className="search-bar" onSubmit={callSearchFunction}>
      <div className="search-inner-container">
        <input
          value={searchTerm}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Search for food..."
          aria-label="Search"
        />
        <button type="button" onClick={clearSearch} className="clear-btn">X</button>
        <button type="submit" className="search-btn">Search</button>
      </div>
      {errorMessage && <div className="search-error-message">{errorMessage}</div>}
    </form>
  );
};

export default SearchBar;
