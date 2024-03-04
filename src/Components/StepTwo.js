import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countries } from './countries'; // Ensure this is correctly imported
import './StepTwo.css'

function StepTwo() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.formData);
  const [detailsChecked, setDetailsChecked] = useState(false);

  const nextStep = () => {
    dispatch({ type: 'SET_STEP', payload: 3 });
  };

  const handleRadioChange = (e) => {
    setDetailsChecked(e.target.value === 'yes');
  };

  return (
    <div>
      <h2>Hi {formData.firstName} {formData.lastName}</h2>
      <table>
        <tbody>
          {countries.slice(0, 5).map(country => ( // Assuming you want to show first 5 countries
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
      
      <button onClick={nextStep} disabled={!detailsChecked}>Save and Proceed</button>
    </div>
  );
}

export default StepTwo;
