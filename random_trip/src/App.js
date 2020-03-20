import React, {useState,useEffect} from 'react';
import './App.css';
import logo from './Imgs/Airplane.png'
import SearchMenu from './Components/SearchMenu.js';
import SearchResults from './Components/SearchResults.js';
import {findBestFlight} from './randomTrip.js'

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    findBestFlight().then((value) => {setData(value)});
  },[]
  );

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
