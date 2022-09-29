import React from "react";
import FormSection from "./FormSection";

const MainFrom = () => {
  return (
    <>
      <div className="contact-wrap w-100 p-md-5 p-4">
        <div className="banner">
          <h1>Training Application Form</h1>
        </div>
        <h3 className="mb-4">Applicant Details</h3>
        <FormSection />
      </div>
    </>
  );
};

export default MainFrom;
