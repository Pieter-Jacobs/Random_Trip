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
            <ResultsCategory category={props.info.categories}/>
            <ResultsData data={props.info.data}/>
            {console.log(props.info.data)}
          </div>
      </div>
    </div>
  );
}

SearchResults.propTypes = {

};
