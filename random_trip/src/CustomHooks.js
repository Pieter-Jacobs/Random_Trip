import React, {useState} from 'react';

export default function useGenerateForm(callback) {
  const [inputs, setInputs] = useState({price: 300, from: 'AMS'});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {handleSubmit, handleInputChange, inputs};
}
