import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Select Doctor",
    description: "Choose a doctor and specialty",
  },
  { id: 2, title: "Choose Appointment", description: "Pick a date and time" },
  {
    id: 3,
    title: "Enter Details",
    description: "Fill in your personal details",
  },
  {
    id: 4,
    title: "Confirm & Pay",
    description: "Review and complete your booking",
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Stepper Header */}
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex-1">
              <div
                className={`h-10 w-10 flex items-center justify-center rounded-full border-2 ${
                  currentStep === step.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : currentStep > step.id
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > step.id ? "✓" : step.id}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-10 right-0 h-1 ${
                    currentStep > step.id ? "bg-green-600" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          {steps[currentStep - 1].title}
        </h2>
        <p className="text-gray-500 text-center">
          {steps[currentStep - 1].description}
        </p>
      </div>

      {/* Stepper Content */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-6">
        {currentStep === 1 && <div>Step 1: Select Doctor</div>}
        {currentStep === 2 && <div>Step 2: Choose Appointment</div>}
        {currentStep === 3 && <div>Step 3: Enter Details</div>}
        {currentStep === 4 && <div>Step 4: Confirm & Pay</div>}
      </div>

      {/* Stepper Navigation */}
      <div className="flex justify-between w-full max-w-2xl mt-6">
        <button
          onClick={goBack}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded-lg text-white ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Back
        </button>
        <button
          onClick={goNext}
          disabled={currentStep === steps.length}
          className={`px-4 py-2 rounded-lg text-white ${
            currentStep === steps.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
