import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('');
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    debugger;
    e.preventDefault();
    fetch(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a970fbb976a06193676f88ef2722cc8&text={search}&sort=relevance&privacy_filter=1&safe_search=1&per_page=25&page=1&format=json&nojsoncallback=1'
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h2>Gallery snapshots</h2>
          <input type="text" onChange={changeHandler} />
          <br />
          <br />
          <input type="submit" value="Search" />
        </form>
      </center>
    </div>
  );
}
