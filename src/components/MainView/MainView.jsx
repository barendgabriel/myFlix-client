// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/MainView/MainView'; // Make sure the path is correct

ReactDOM.render(<MainView />, document.getElementById('root'));
// components/MainView/MainView.jsx
import React from 'react';

export class MainView extends React.Component {
  render() {
    return <h1>Movie List Loaded!</h1>; // Static message for now
  }
}
