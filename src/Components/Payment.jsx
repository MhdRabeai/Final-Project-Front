import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51QMG6qFfxkp1DJeeG1mcP5YL3UfF3t6L97xYbqvlp18tFD8xFw8sWqMbFNXCim1F3nMze507PbJ13VhJg3Sfx2yV00GgwIyRrs"
);

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const { data } = await axios.post("http://localhost:4000/createPayment", {
      amount: amount,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Secure Payment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            type="submit"
            disabled={!stripe || isLoading}
            className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Payment = ({ amount }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        locale: "en",
      }}
    >
      <CheckoutForm amount={amount} />
    </Elements>
  );
};

export default Payment;
