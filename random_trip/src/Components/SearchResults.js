import React,{useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import {findBestFlight} from '../randomTrip.js'
import styles from '../Styles/SearchResults.module.css';
import ResultsCategory from './ResultsCategory.js';
import ResultsData from './ResultsData.js';

export default function SearchResults(props) {
  const [data, setData] = useState({});
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    findBestFlight(props.from,props.departure,props.arrival).then((value) => {
      if (value.price == "No Flights" || value.price < props.maxPrice) {
        findNewFlight();
      }
      else {
        setData(value)
      }
    });

  },[props.canRequest]);

  let findNewFlight = () => {
    findBestFlight(props.from,props.departure,props.arrival).then((response) => {
      if (response.price == "No Flights") {
        findNewFlight(response);
      }
      else {
        setData(response);
      }
    });
  }

  let loadingCheck = () => {
    if(Object.keys(data).length == 0 && props.canRequest == true){
      return (<div className={styles['rv-load']}>Loading...</div>)
    }
  }

  let appear = () => {
    if (props.canRequest == true) {
      return 1;
    }
    return 0;
  }


  return (
    <div className={appear() ? styles['rv-flight-info-container'] : styles['invisible'] }>
      <a className={styles['rv-flight-info']} href={`https://www.skyscanner.nl/transport/vluchten/${props.from}/${data.to}/${data.departure}/${data.arrival}/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home`}>
        {loadingCheck()}
        <ResultsCategory category = {Object.keys(data)}/>
        <ResultsData data = {Object.values(data)} />
      </a>
  </div>
  );
}

SearchResults.propTypes = {

};
