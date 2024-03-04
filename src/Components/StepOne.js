import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countries } from './countries'; // Ensure you have this file with the countries array
import './StepOne.css'; // Your CSS file for styling

function StepOne() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.formData);

  const handleChange = (e) => {
    dispatch({
      type: 'FORM_INPUT_CHANGE',
      payload: { [e.target.name]: e.target.value },
    });
  };

  const nextStep = () => {
    dispatch({ type: 'SET_STEP', payload: 2 });
  };

  // Check if all required fields are filled
  const allFieldsFilled = formData.firstName && formData.lastName && formData.applicationDate && formData.country;

  return (
    <div className="stepOne-container">
      <input
        className="stepOne-input"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        className="stepOne-input"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        className="stepOne-input"
        type="date"
        name="applicationDate"
        value={formData.applicationDate}
        onChange={handleChange}
      />
      <select
        className="stepOne-select"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.code} value={country.name}>{country.name}</option>
        ))}
      </select>
      <button
        className="stepOne-button"
        onClick={nextStep}
        disabled={!allFieldsFilled}
      >
        Save and Proceed
      </button>
    </div>
  );
}

export default StepOne;
