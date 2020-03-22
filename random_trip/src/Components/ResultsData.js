import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/ResultsData.module.css'

export default function ResultsData(props) {
  return (
    <div className={styles['rv-data-container']}>
      {props.data.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  );
}

ResultsData.propTypes = {

};
