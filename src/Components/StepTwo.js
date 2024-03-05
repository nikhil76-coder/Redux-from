import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countries } from './countries'; // Ensure this is correctly imported
import './StepTwo.css';

function StepTwo() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.formData);
  const [detailsChecked, setDetailsChecked] = useState(false);

  const handleRadioChange = (e) => {
    setDetailsChecked(e.target.value === 'yes');
  };
    console.log(formData)
  async function submitFormData() {
    dispatch({ type: 'SUBMIT_FORM_START' }); // Indicate submission start
    try {
      const response = await fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("success nikhil")
        dispatch({ type: 'SUBMIT_FORM_SUCCESS' });
        // Navigate to the next step after successful submission
        dispatch({ type: 'SET_STEP', payload: 3 });

        
      } else {
        throw new Error('Failed to submit form data');
      }
    } catch (error) {
      dispatch({ type: 'SUBMIT_FORM_FAILURE', payload: error.message });
      // Handle error (e.g., show an error message to the user)
    }
  }

  const handleSubmit = () => {
    if (detailsChecked) {
      submitFormData();
    } else {
      // Optionally, handle the case where details aren't checked
      // For example, show an error message or alert
      alert("Please confirm that you've checked all the details before proceeding.");
    }
  };

  return (
    <div>
      <h2>Hi {formData.firstName} {formData.lastName}</h2>
      <table>
        <tbody>
          {countries.slice(0, 5).map(country => (
            <tr key={country.code}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    name="selectedCountries"
                    value={country.name}
                  /> {country.name}
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div>
        <p>Have you checked all the details?</p>
        <label>
          <input
            type="radio"
            name="detailsChecked"
            value="yes"
            onChange={handleRadioChange}
            checked={detailsChecked === true}
          /> Yes
        </label>
        <label>
          <input
            type="radio"
            name="detailsChecked"
            value="no"
            onChange={handleRadioChange}
            checked={detailsChecked === false}
          /> No
        </label>
      </div>
      <button onClick={handleSubmit} disabled={!detailsChecked}>Submit and Proceed</button>
    </div>
  );
}

export default StepTwo;
