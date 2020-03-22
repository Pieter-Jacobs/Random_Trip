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
    findBestFlight(props.from).then((value) => {setData(value)});
  },[props.canRequest]);

  let loadingCheck = () => {
    if(Object.keys(data).length == 0 && !isFirstRun.current){
      return (<div className={styles['rv-load']}>Loading...</div>)
    }
  }
  return (
    <div className={styles['rv-flight-info']}>
      {loadingCheck()}
      <ResultsCategory category = {Object.keys(data)}/>
      <ResultsData data = {Object.values(data)} />
    </div>
  );
}

SearchResults.propTypes = {

};
