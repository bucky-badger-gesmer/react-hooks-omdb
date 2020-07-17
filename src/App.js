import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [queriedItem, setQueriedItem] = useState(null);
  const [query, setQuery] = useState('');

  const onInputChange = (query) => {
    setQuery(query.target.value);
  };

  const onSearchClick = () => {
    fetch(`https://www.omdbapi.com/?apikey=c9e12726&t=${query}`)
    .then(res => res.json())
    .then(result => {
      console.log('hmmm', result);
      setQueriedItem(JSON.stringify(result));
    });
  };

  return (
    <div className="root">
      <div className="searchBox">
        <input type="text" placeholder="Search for a title..." value={query} onInput={onInputChange.bind(this)} />
        <button onClick={onSearchClick.bind(this)}>Search</button>
      </div>
      <div>
        <h1>Your results:</h1>
        {queriedItem}
      </div>
    </div>
  );
}

