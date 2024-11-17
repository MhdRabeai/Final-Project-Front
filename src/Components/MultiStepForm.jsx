import React, { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    doctor: "",
    specialty: "",
    date: "",
    time: "",
    userDetails: {
      name: "",
      phone: "",
      email: "",
    },
    paymentInfo: {},
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne nextStep={nextStep} updateFormData={updateFormData} />;
      case 2:
        return (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <StepThree
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return <StepFour formData={formData} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Book a Doctor's Appointment
        </h1>

        <ol className="flex md:w-full items-center text-indigo-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ">
          {["Step 1", "Step 2", "Step 3", "Step 4"].map((label, index) => (
            <li
              key={index}
              className={` flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2  ${
                currentStep === index + 1 ? "bg-blue-600" : "bg-gray-400"
              }`}
            >
              <span class="w-6 h-6 bg-indigo-600 border border-indigo-200 rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                {index + 1}
              </span>
              Step {index + 1}
            </li>
          ))}
        </ol>
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
