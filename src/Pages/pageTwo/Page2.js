// import React, { useState } from 'react';
// import { countries } from '../countries'; 
// import './Pagetwo.css'

// const Page2 = ({ onNext, onBack, formData }) => {
//   const [allChecked, setAllChecked] = useState(false);
//   const firstFiveCountries = countries.slice(0, 5);

//   const handleRadioChange = (event) => {
//     setAllChecked(event.target.value === 'yes');
//   };

//   return (
//     <div className="page-container">
//     <h2>Hi {formData.firstName} {formData.lastName}</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Country</th>
//             <th>Check</th>
//           </tr>
//         </thead>
//         <tbody>
//           {firstFiveCountries.map((country, index) => (
//             <tr key={index}>
//               <td>{country.name}</td>
//               <td>
//                 <input type="checkbox" id={`country-${country.code}`} name="country" value={country.code} />
//                 <label htmlFor={`country-${country.code}`}></label>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="detailsChecked"
//             value="yes"
//             onChange={handleRadioChange}
//           /> Have you checked all the details?
//         </label>
//       </div>
//       <button onClick={onNext} disabled={!allChecked}>Save and Proceed</button>
//     </div>
//   );
// };

// export default Page2;
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  formData: state.formData,
});


const Page2 = ({ formData, onBack, onNext }) => {
  return (
    <div>
      <h2>Review Your Information</h2>
      <div>
        <p>First Name: {formData?.firstName}</p>
        <p>Last Name: {formData?.lastName}</p>
        {/* Display other form fields as necessary */}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};


export default connect(mapStateToProps)(Page2);

