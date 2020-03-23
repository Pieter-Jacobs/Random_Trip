import React, {useState} from 'react';

export default function useGenerateForm() {
  let today = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm
  const [inputs, setInputs] = useState({'price': '300', 'from': 'AMS', 'departure': today, 'return': today});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {handleSubmit, handleInputChange, inputs};
}
