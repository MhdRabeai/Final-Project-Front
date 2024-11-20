import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserInfo } from "../Services/UserContext";
import { Elements, CardElement, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loading } from "../Components/Loading";
import { Bounce, toast } from "react-toastify";

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
    description: "Complete your booking",
  },
];

const Appointment = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const { user } = useUserInfo();
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState(false);
  const doctorFreeTimes = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 AM",
    "12:00 PM - 01:0 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [userCondition, setUserCondition] = useState("");

  const goNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (user && isOk) {
      try {
        const res = await fetch(`http://localhost:4000/booking`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            from: user["_id"],
            to: doctorId,
            selectedTime,
            userCondition,
          }),
        });
        const msg = await res.json();
        if (res.ok) {
          setIsLoading(false);
          setTimeout(() => {
            navigate("/");
          }, 3000);
          return toast.success(msg["message"], {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (err) {
        setIsLoading(false);
        navigate("/register");
        return toast.error(err.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (!user) {
      navigate("/login");
    }
  }, [isOk]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="container max-w-[86rem] w-full mx-auto px-4 ">
      <div class="overflow-y-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <div key={step.id} className={`relative flex-1 my-step`}>
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

          <div className="w-full max-w-2xl bg-white px-6 py-4 rounded-lg shadow-md mt-4">
            <form>
              {currentStep === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Select a Time Slot
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {doctorFreeTimes.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`p-1 rounded-lg border text-sm ${
                          selectedTime === time
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <textarea
                    id="textarea-label1"
                    className="resize-none mt-4 py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    rows="3"
                    value={userCondition}
                    onChange={(e) => setUserCondition(e.target.value)}
                    placeholder="Describe your condition..."
                  ></textarea>
                </div>
              )}
              {currentStep === 2 && (
                <Elements
                  stripe={stripePromise}
                  options={{
                    locale: "en",
                  }}
                >
                  <CheckoutForm
                    from={user["_id"]}
                    to={doctorId}
                    setIsOk={setIsOk}
                  />
                </Elements>
              )}
              {currentStep === 3 && (
                <div>
                  <div
                    class="max-w-xs "
                    role="alert"
                    tabindex="-1"
                    aria-labelledby="hs-toast-warning-example-label"
                  >
                    <div class="flex p-4">
                      <div class="shrink-0">
                        <svg
                          class="shrink-0 size-4 text-yellow-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                      </div>
                      <div class="ms-3">
                        <p
                          id="hs-toast-warning-example-label"
                          class="text-lg text-gray-700 dark:text-neutral-400"
                        >
                          This is a warning message.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Your request will be reviewed by the doctor, and if the
                    appointment is confirmed, a message will be sent to your
                    email containing the password for the video call room. If
                    you agree, confirm the request
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="flex justify-between w-full max-w-2xl mt-2">
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
              disabled={currentStep === 2 && !isOk}
              className={`px-4 py-2 rounded-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500 ${
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
              disabled={!user}
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

const CheckoutForm = ({ from, to, setIsOk }) => {
  const stripe = useStripe();
  //   const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handlePaySubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(from);
    try {
      const response = await fetch("http://localhost:4000/process-payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ from, to }),
      });
      console.log(response);
      if (response.ok) {
        setIsOk(true);
      } else {
        setIsOk(false);
      }
      setIsOk(true);
    } catch (error) {
      console.log(error.message);
    }
    // const { error, paymentIntent } = await stripe.confirmCardPayment(
    //   data.clientSecret,
    //   {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   }
    // );

    // if (error) {
    //   setIsOk(false);
    //   console.error(error.message);
    // } else if (paymentIntent.status === "succeeded") {
    //
    //   // alert("Payment Successful!");
    // }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
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
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold text-sm ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#4f9451] hover:bg-[#2e6430]"
            }`}
          >
            {isLoading ? "Processing..." : "Check"}
          </button>
        </div>
      </div>
    </div>
  );
};
