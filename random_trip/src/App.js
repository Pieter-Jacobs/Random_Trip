import React from 'react';
import './App.css';
import logo from './Imgs/Airplane.png'
import SearchMenu from './Components/SearchMenu.js';
import SearchResults from './Components/SearchResults.js';

function App() {
  return (
    <div className="App">
      <div className="rv-title">
        <img src={logo}/>
        <h1>Generate a Random Vacation</h1>
      </div>
      <SearchMenu/>
    </div>
  );
}
//<SearchResults {...data}/>
export default App;
