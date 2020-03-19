import React from 'react';
import './App.css';
import SearchMenu from './Components/SearchMenu.js';
import SearchResults from './Components/SearchResults.js';

function App() {

  return (
    <div className="App">
      <h1>Generate a Random Trip</h1>
      <SearchMenu/>
      <SearchResults info = {{categories :["Price","From","To"], data: ["150","AMS","SYD"]}}/>
    </div>
  );
}

export default App;
