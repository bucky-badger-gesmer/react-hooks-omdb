import React, { useState } from 'react';
import './App.css';

export default function App() {
  // state:
  const [queriedItem, setQueriedItem] = useState(null);
  const [query, setQuery] = useState('');

  // event handlers:
  const onInputChange = (query) => {
    setQuery(query.target.value);
  };

  const onSearchClick = () => {
    fetch(`https://www.omdbapi.com/?apikey=c9e12726&t=${query}`)
    .then(res => res.json())
    .then(result => {
      setQueriedItem(JSON.stringify(result));
    });
  };

  // helper methods:
  const getResults = () => {
    const result = JSON.parse(queriedItem);
    return (
      <div>
        <h1>{result.Title} ({result.Year})</h1>
        <img src={result.Poster} />
      </div>
    );
  };

  return (
    <div className="root">
      <div className="searchBox">
        <input type="text" placeholder="Search for a title..." value={query} onChange={onInputChange.bind(this)} />
        <button onClick={onSearchClick.bind(this)}>Search</button>
      </div>
      <hr />
      <div className="searchResults">
        <h1>Your results:</h1>
        {queriedItem == null ? null : getResults()}
      </div>
    </div>
  );
}

