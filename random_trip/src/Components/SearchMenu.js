import React, {useState} from 'react';
import SearchResults from './SearchResults.js';
import useGenerateForm from '../CustomHooks.js'
import PropTypes from 'prop-types';
import styles from '../Styles/SearchMenu.module.css';

export default function SearchMenu(props) {
  const {inputs, handleInputChange, handleSubmit} = useGenerateForm();
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
          <label>Departure:</label>
          <input type="text" name="departure" value={inputs.departure} onChange={handleInputChange}/>
          <label>Return:</label>
          <input type="text" name="return" value={inputs.return} onChange={handleInputChange}/>
        </div>
        <input className={styles['rv-submit']} type="submit" value="Generate" onClick={onGenerate}/>
      </form>
      <SearchResults maxPrice = {inputs.price} from={inputs.from} departure={inputs.departure} arrival={inputs.return} canRequest={request}/>
  </div>
  );
}

SearchMenu.propTypes = {

};
