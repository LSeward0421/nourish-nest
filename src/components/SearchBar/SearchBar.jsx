import { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetInputField = () => {
    setSearchTerm('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    resetInputField();
  };

  return (
    <form className="search-bar">
      <input
        value={searchTerm}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <button onClick={callSearchFunction} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
