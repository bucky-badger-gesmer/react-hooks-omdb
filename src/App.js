import React, { useState } from 'react';
import Button from './shared_components/Button.js';
import ImgMediaCard from './ImgMediaCard.js';
// import './App.css';

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
    console.log('result', result);

    const poster = result.Poster === 'N/A' ? 'No image available' : <img src={result.Poster} />;

    return (
      <div className="found-title">
        <h1>{result.Title} ({result.Year})</h1>
        {poster}

        <Button size={"sm"} backgroundColor="purple" color="gold">Small Button</Button>
        <Button size={"lg"}>Smaller Button</Button>
        <Button size={"xs"}>Big Button</Button>

        {/* <Button variant="danger" size={"sm"} backgroundColor="purple" color="gold">Small Button</Button>
        <Button variant="primary" size={"lg"}>Smaller Button</Button>
        <Button variant="warning" size={"xs"}>Big Button</Button> */}
      </div>
    );
  };

  return (
    <div className="root">
      <div className="searchBox">
        <input type="text" placeholder="Search for a title..." value={query} onChange={onInputChange.bind(this)} />
        <button onClick={onSearchClick.bind(this)}>Search</button>
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', width: '50%', backgroundColor: 'green' }}>
          {/* <ImgMediaCard /> */}
        </div>
      </div>
      <hr />
      <div className="searchResults">
        <h1>Your results:</h1>
        {queriedItem == null ? null : getResults()}
      </div>
    </div>
  );
}

