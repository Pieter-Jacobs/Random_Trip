import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/ResultsData.module.css'

export default function ResultsData(props) {
  return (
    <div>
      {props.data.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  );
}

ResultsData.propTypes = {

};
