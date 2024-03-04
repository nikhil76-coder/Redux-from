// Page3.js
import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const formData = useSelector(state => state.form.page1FormData);

  return (
    <div>
      <h2>Form Submission Summary</h2>
      <p>First Name: {formData?.firstName}</p>
      <p>Last Name: {formData?.lastName}</p>
      <p>Application Date: {formData?.applicationDate}</p>
      <p>Country: {formData?.country}</p>
    </div>
  );
};

export default Page3;
