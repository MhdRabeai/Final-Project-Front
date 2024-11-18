import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QMG6qFfxkp1DJeeG1mcP5YL3UfF3t6L97xYbqvlp18tFD8xFw8sWqMbFNXCim1F3nMze507PbJ13VhJg3Sfx2yV00GgwIyRrs"
);
const steps = [
  { id: 1, title: "Choose Appointment", description: "Pick a date and time" },

  {
    id: 2,
    title: "Confirm & Pay",
    description: "Review and complete your booking",
  },
  {
    id: 3,
    title: "Done",
    description: "complete booking",
  },
];

const Stepper = ({ amount }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sssss");
  };

  return (
    <div className=" flex flex-col items-center justify-center  p-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex-1">
              <div
                className={`h-10 w-10 flex items-center justify-center rounded-full border-2 ${
                  currentStep === step.id
                    ? "bg-[#70da73] text-white border-[#70da73]"
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

      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-6">
        <form>
          {currentStep === 1 && <div>Step 1: Choose Appointment</div>}
          {currentStep === 2 && (
            <Elements
              stripe={stripePromise}
              options={{
                locale: "en",
              }}
            >
              <CheckoutForm amount={40} />
            </Elements>
          )}
          {currentStep === 3 && <div>Step 3: Enter Details</div>}
        </form>
      </div>

      <div className="flex justify-between w-full max-w-2xl mt-6">
        <button
          onClick={goBack}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded-lg text-white ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#4f9451] hover:bg-[#2e6430]"
          }`}
        >
          Back
        </button>
        <button
          onClick={goNext}
          className={`px-4 py-2 rounded-lg text-white ${
            currentStep === steps.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#4f9451] hover:bg-[#2e6430]"
          } ${currentStep === steps.length ? "hidden" : "block"}`}
        >
          Next
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white bg-[#4f9451] hover:bg-[#2e6430] ${
            currentStep === steps.length ? "block" : "hidden"
          }`}
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Stepper;
const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handlePaySubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const { data } = await axios.post("http://localhost:4000/createPayment", {
      amount: amount,
      credentials: "include",
    });

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      data.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      console.error(error.message);
    } else if (paymentIntent.status === "succeeded") {
      alert("Payment Successful!");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg p-3">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                    padding: "20px",
                  },
                  invalid: {
                    color: "#fa755a",
                  },
                },
              }}
            />
          </div>

          <button
            type="button"
            disabled={!stripe || isLoading}
            onClick={handlePaySubmit}
            className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};
