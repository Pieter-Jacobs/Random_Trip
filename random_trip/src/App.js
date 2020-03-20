import React, {useState,useEffect} from 'react';
import './App.css';
import SearchMenu from './Components/SearchMenu.js';
import SearchResults from './Components/SearchResults.js';
import {findBestFlight} from './randomTrip.js'
let fuckyes;

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    findBestFlight().then((value) => {setData(value)});
  },[]
  );

  return (
    <div className="App">
      <h1>Generate a Random Trip</h1>
      <SearchMenu/>
      <SearchResults {...data}/>
    </div>
  );
}

export default App;
