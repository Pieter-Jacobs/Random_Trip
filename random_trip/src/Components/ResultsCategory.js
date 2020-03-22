import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/ResultsCategory.module.css';

export default function ResultsCategory(props) {
  return (
    <div className={styles['rv-category-container']}>
      {props.category.map((item, i) => <div key = {i}>{item}</div>)}
    </div>
  );
}

ResultsCategory.propTypes = {

};
