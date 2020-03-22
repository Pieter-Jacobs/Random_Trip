import React, {useState} from 'react';
import SearchResults from './SearchResults.js';
import useGenerateForm from '../CustomHooks.js'
import PropTypes from 'prop-types';
import styles from '../Styles/SearchMenu.module.css';

export default function SearchMenu(props) {
  const generate = () => {
    alert(`Price: ${inputs.price} From: ${inputs.from}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useGenerateForm(generate);
  const [request,setRequest] = useState(false);
  const [visible,setVisibility] = useState(true);
  const onGenerate = () => {
    setRequest(true);
    setVisibility(false);
  }

  return (
    <div className={styles['rv-form-container']}>
      <form className={visible ? styles['rv-form'] : styles['invisible']} method="POST" onSubmit={handleSubmit}>
        <div className={styles['rv-info']}>
          <label>Maximum Price:</label>
          <input type="text" name="price" value={inputs.price} onChange={handleInputChange}/>
          <label>From:</label>
          <input type="text" name="from" value={inputs.from} onChange={handleInputChange}/>
        </div>
        <input className={styles['rv-submit']} type="submit" value="Generate" onClick={onGenerate}/>
      </form>
      <SearchResults from={inputs.from} canRequest={request}/>
  </div>
  );
}

SearchMenu.propTypes = {

};
