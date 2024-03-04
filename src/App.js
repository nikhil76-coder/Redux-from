

import React, { useState } from "react";
import Page1 from "./Pages/pageOne/Page1";
import Page2 from "./Pages/pageTwo/Page2";
import Page3 from "./Pages/Page3";

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // Include other form fields as necessary
  });

  
  const goToPage = (pageNumber) => {
    // Add validation or other checks here if needed before changing pages
    setCurrentPage(pageNumber);
  };

  const handleFormDataChange = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };
 
 
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            onNext={() => goToPage(2)}
            formData={formData}
            onFormDataChange={handleFormDataChange}
          />
        );
      case 2:
        return (
          <Page2
            onNext={() => goToPage(3)}
            onBack={() => goToPage(1)}
            formData={formData}
          />
        );
      case 3:
        return (
          <Page3
            onBack={() => goToPage(2)}
          />
        );
      default:
        return (
          <Page1
            onNext={() => goToPage(2)}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default PaginationComponent;
