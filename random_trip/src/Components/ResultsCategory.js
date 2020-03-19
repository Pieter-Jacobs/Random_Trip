import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/ResultsCategory.module.css';

export default function ResultsCategory(props) {
  return (
    <div>
      {props.category.map((item) => <div>{item}</div>)}
    </div>
  );
}

ResultsCategory.propTypes = {

};
