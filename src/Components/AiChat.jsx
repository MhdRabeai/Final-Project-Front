import React, { useContext } from "react";
import { Context } from "../Services/ChatContext";

const AiChat = () => {
  const {
    input,
    setInput,
    onSent,
    prevPrompts,
    loading,
    startChat,
    handleUserChoice,
    isChatStarted,
  } = useContext(Context);

  return (
    <>
      <button
        type="button"
        className="fixed right-[-5px] bottom-20 z-40 text-white"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <div className="p-3 rounded-[50%_0%_0%_50%] border-4 border-white bg-[#4f9451]">
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      <div
        id="hs-offcanvas-example"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full sm:max-w-xs w-[80%] z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700 hs-overlay-open:flex flex-col justify-between"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-offcanvas-example-label"
      >
        <div className="p-4 flex justify-between items-center bg-[#4f9451] text-white">
          <h2 className="text-lg font-semibold">Chat with AI</h2>
          <button className="text-white bg-[#4f9451] p-2 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* عرض الرسائل */}

        <>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {prevPrompts.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-[#4f9451] text-white text-lg font-medium"
                      : "bg-[#d3f9d8] text-[#2a5d44] text-base"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-lg bg-[#d3f9d8] text-[#2a5d44] text-base">
                  Loading...
                </div>
              </div>
            )}
          </div>
          {isChatStarted ? (
            <div className="flex p-4 border-t dark:border-neutral-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
                placeholder="Type a message..."
                className="peer py-2 px-4 ps-11 block w-full
                border-2  border-gray-200 rounded-lg text-sm
                focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent 
                 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                // className="flex-1 p-2 rounded-lg border border-gray-300 text-xl dark:border-neutral-600"
              />
              <button
                onClick={() => onSent(input)}
                className="ml-2 p-2 bg-green-500 text-white text-xl rounded-lg"
              >
                <img src="/12.webp" alt="img" class="w-7 h-7" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-x-5 space-y-1">
              <button
                onClick={() => {
                  handleUserChoice("1");
                  startChat();
                }}
                className="flex-1 p-2 bg-green-500 text-white rounded-lg"
              >
                1- Appointment Booking with a Doctor{" "}
              </button>
              <button
                onClick={() => {
                  handleUserChoice("2");
                  startChat();
                }}
                className="flex-1 p-2 bg-green-500 text-white rounded-lg"
              >
                2- Common Psychological Questions{" "}
              </button>
              <button
                onClick={() => {
                  handleUserChoice("3");
                  startChat();
                }}
                className="flex-1 p-2 bg-green-500 text-white rounded-lg"
              >
                3- Initial Symptoms Diagnosis{" "}
              </button>
            </div>
          )}
        </>
        {/* */}
      </div>
    </>
  );
};

export default AiChat;

// import React, { useState } from "react";
// import axios from "axios";

// const AiChat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input.trim() };
//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       const response = await axios.post("http://localhost:5000/analyze", {
//         answers: [{ id: 1, type: "general", answer: input }],
//       });

//       const analysisResult = response.data[0]?.score || "No score available";
//       const botResponse = { sender: "bot", text: `Your score: ${analysisResult}` };
//       setMessages((prev) => [...prev, botResponse]);
//     } catch (error) {
//       const errorResponse = { sender: "bot", text: "Something went wrong!" };
//       setMessages((prev) => [...prev, errorResponse]);
//     }

//     setInput("");
//   };

//   return (
//     <>
//       <div>
//         <h3>Chat with HealthBot</h3>
//         <div>
//           <ul>
//             {messages.map((msg, index) => (
//               <li key={index} className={msg.sender === "user" ? "user" : "bot"}>
//                 {msg.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <form onSubmit={sendMessage}>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Your Message..."
//             required
//           />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AiChat;
