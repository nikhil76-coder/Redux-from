import React from 'react';
import { useSelector } from 'react-redux';

function FormDataSummary() {
  const formData = useSelector((state) => state.formData);

  return (
    <div>
      <h2>Form Data Summary</h2>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{formData.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{formData.lastName}</td>
          </tr>
          <tr>
            <td>Application Date</td>
            <td>{formData.applicationDate}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{formData.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FormDataSummary;
