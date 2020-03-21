import React, {useState} from 'react';
import useGenerateForm from '../CustomHooks.js'
import PropTypes from 'prop-types';
import styles from '../Styles/SearchMenu.module.css';

export default function SearchMenu(props) {
  const generate = () => {
  alert(`Price: ${inputs.price} From: ${inputs.from}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useGenerateForm(generate);
  return (
    <div className={styles['rv-form-container']}>
      <form className={styles['rv-form']} method="POST" onSubmit={handleSubmit}>
        <div className={styles['rv-info']}>
          <label>Maximum Price:</label>
          <input type="text" name="price" value={inputs.price} onChange={handleInputChange}/>
          <label>From:</label>
          <input type="text" name="from" value={inputs.from} onChange={handleInputChange}/>
        </div>
        <input className={styles['rv-submit']} type="submit" value="Generate"/>
      </form>
  </div>
  );
}

SearchMenu.propTypes = {

};
