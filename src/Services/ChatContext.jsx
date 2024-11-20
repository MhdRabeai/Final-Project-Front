import { createContext, useEffect, useState } from "react";
import run from "../config/gemini";

const getPrevPrompts = () => {
  const storedPrompts = sessionStorage.getItem("prevPrompts");
  return storedPrompts ? JSON.parse(storedPrompts) : [];
};
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [prevPrompts, setPrevPrompts] = useState(getPrevPrompts());
  const [isChatStarted, setIsChatStarted] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("prevPrompts", JSON.stringify(prevPrompts));
  }, [prevPrompts]);
  const delayPara = (i, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * i);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
    setPrevPrompts([]);
    setIsChatStarted(true);
  };
  const startChat = () => {
    setIsChatStarted(true);
    setPrevPrompts([
      {
        role: "bot",
        content:
          "مرحباً! كيف يمكنني مساعدتك اليوم؟ اختر أحد الخيارات التالية:\n" +
          "1- طريقة حجز موعد مع طبيب في الموقع\n" +
          "2- الإجابة عن أسئلة نفسية شائعة\n" +
          "3- إعطاء تشخيص مبدئي لأعراض مع التأكيد على أنه لا يغني عن فحص الطبيب",
      },
    ]);
  };
  const handleUserChoice = (choice) => {
    switch (choice) {
      case "1":
        setPrevPrompts((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "لتحديد موعد مع الطبيب، يمكنك زيارة صفحة حجز المواعيد على الموقع، ثم اختيار التخصص والموعد المناسب.",
          },
        ]);
        break;
      case "2":
        setPrevPrompts((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "تتضمن الأسئلة النفسية الشائعة مواضيع مثل: كيف يمكنني التعامل مع القلق؟ هل هناك علاج للاكتئاب؟ يمكنني مساعدتك في الإجابة عليها.",
          },
        ]);
        break;
      case "3":
        setPrevPrompts((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "إعطاء تشخيص مبدئي يمكن أن يشمل شرح الأعراض، ولكن يجب عليك استشارة الطبيب للحصول على تشخيص دقيق.",
          },
        ]);
        break;
      default:
        setPrevPrompts((prev) => [
          ...prev,
          { role: "bot", content: "من فضلك اختر خيارًا من 1 إلى 3." },
        ]);
    }
  };
  const onSent = async (prompt) => {
    console.log("الرسالة المدخلة:", input);
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response = "";

    if (!prompt !== undefined) {
      console.log("ressssss");
      setPrevPrompts((prev) => [...prev, { role: "user", content: input }]);
      setRecentPrompt(input);
      response = await run([input]);
    } else {
      console.log("res");
      response = await run([prompt]);
      console.log(response);
      setRecentPrompt(prompt);
    }
    setPrevPrompts((prev) => [...prev, { role: "bot", content: response }]);
    let responseArray = response.split("**");
    let newRess = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newRess += responseArray[i];
      } else {
        newRess += `<b>${responseArray[i]}</b>`;
      }
    }

    let newRess2 = newRess.split("*").join("</hr>");
    let newRessArray = newRess2.split(" ");
    for (let i = 0; i < newRessArray.length; i++) {
      const nextWord = newRessArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    resultData,
    newChat,
    startChat,
    isChatStarted,
    setIsChatStarted,
    handleUserChoice,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
