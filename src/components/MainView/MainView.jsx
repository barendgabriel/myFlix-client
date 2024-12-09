// src/components/MainView/MainView.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainView = () => (
  <div>
    <h1>Movie List</h1>
    <ul>
      <li>
        <Link to="/movies/Evil%20Dead">Evil Dead</Link>
      </li>
      <li>
        <Link to="/movies/Godzilla">Godzilla</Link>
      </li>
      <li>
        <Link to="/movies/Jurassic%20Park">Jurassic Park</Link>
      </li>
    </ul>
  </div>
);

export default MainView;
