import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <center>
        <form>
          <h2>Gallery snapshots</h2>
          <input type="text" value={search} />
          <br />
          <br />
          <input type="submit" value="Search" />
        </form>
      </center>
    </div>
  );
}
