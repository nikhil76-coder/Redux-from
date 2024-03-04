import React, { useState } from "react";
import "./Pageone.css";
import { countries } from "../countries";
import { useDispatch } from 'react-redux';
import { updatePage1FormData } from '../store'; 

const Page1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    applicationDate: "",
    country: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 
 // Inside your component, when dispatching the action
const handleSubmit = (e) => {
  e.preventDefault();
  // Dispatch the correct action with the current form data
  dispatch(updatePage1FormData(formData));
  onNext(); // Navigate to the next page
};

// dispatch(updatePage1FormData({ firstName: 'John', lastName: 'Doe' }));

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Application Date:</label>
      <input
        type="date"
        name="applicationDate"
        value={formData.applicationDate}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Country:</label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
    <button type="submit">Save and Proceed</button>
  </form>
  );
};

export default Page1;

