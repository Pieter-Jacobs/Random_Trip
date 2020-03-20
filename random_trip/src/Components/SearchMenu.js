import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/SearchMenu.module.css';

export default function SearchMenu(props) {
  return (
    <div className={styles['rv-form-container']}>
      <form className={styles['rv-form']}>
        <div className={styles['rv-info']}>
          <label>Maximum Price:</label>
          <input type="text"/>
          <label>From:</label>
          <input type="text"/>
        </div>
        <input className={styles['rv-submit']} type="submit" value="Generate"/>
      </form>
  </div>
  );
}

SearchMenu.propTypes = {

};
