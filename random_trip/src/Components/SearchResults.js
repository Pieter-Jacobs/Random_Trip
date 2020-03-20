import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/SearchMenu.module.css';
import ResultsCategory from './ResultsCategory.js';
import ResultsData from './ResultsData.js';

export default function SearchResults(props) {
  return (
    <div>
      <div>
          <div>
            <ResultsCategory category = {Object.keys(props)}/>
            <ResultsData data = {Object.values(props)} />
          </div>
      </div>
    </div>
  );
}

SearchResults.propTypes = {

};
