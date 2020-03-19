import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/SearchMenu.module.css';

export default function SearchMenu(props) {
  return (
    <form>
      <label>Maximum Price:</label>
      <input type="text"/>
      <label></label>
      <input type="submit" value="Generate"/>
    </form>
  );
}

SearchMenu.propTypes = {

};
