"use client";

import { useEffect, useState } from "react";

async function sendFormData(email: string) {
  const res = await fetch("/api/form", {
    method: "POST",
    body: JSON.stringify({ email: email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

const Form = () => {
  const [emailInput, setEmailInput] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [showedMsg, setShowedMsg] = useState("");

  useEffect(() => {
    if (requestStatus === "success") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setShowedMsg("");
        setEmailInput("");
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    try {
      const data = await sendFormData(emailInput);
      setRequestStatus("success");
      setShowedMsg(data.message);
    } catch (err: any) {
      setRequestStatus("error");
      setShowedMsg(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="grid gap-y-[10px] md:grid-cols-[1fr_min-content] md:gap-x-4"
      >
        <div>
          <input
            type="text"
            className={`${requestStatus == "error" ? "ring-red-light" : " "} ${
              requestStatus == "success" ? "ring-green-600" : " "
            } w-full grow rounded-[28px] py-[10px] pl-8 shadow-[0_0_7px_3px_rgba(0,0,0,0.0001)] ring-1 ring-blue-pale placeholder:text-xs placeholder:font-light placeholder:leading-5 placeholder:text-blue-pale focus:outline-none md:py-[18px] md:pl-[30px] md:placeholder:text-base md:placeholder:leading-5`}
            placeholder="Your email address..."
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          />
          {showedMsg && (
            <p
              className={`${
                requestStatus == "success"
                  ? "text-green-600"
                  : " text-red-light"
              } mt-2 mb-5 text-center text-[10px] italic leading-5 md:mb-0 md:mt-[6px] md:pl-[30px] md:text-left md:text-xs md:leading-5`}
            >
              {showedMsg}
            </p>
          )}
        </div>
        <button className="relative w-full grow rounded-[28px] bg-blue py-3 text-xs font-semibold text-white shadow-[0_5px_10px_2px_rgba(76,123,243,0.2304)] hover:after:absolute  hover:after:top-0 hover:after:left-0 hover:after:h-full hover:after:w-full hover:after:rounded-[28px] hover:after:bg-white hover:after:opacity-25 md:h-[56px] md:w-[200px] md:text-base">
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default Form;
