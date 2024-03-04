import React from 'react';
import { useSelector } from 'react-redux';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import FormDataSummary from './FormDataSummary';

function MainForm() {
  const currentStep = useSelector(state => state.currentStep);

  switch (currentStep) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <FormDataSummary />;
    default:
      return null; // Or a 404 component
  }
}

export default MainForm;
