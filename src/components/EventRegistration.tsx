"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import InputBox from "./InputBox";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/context/GlobalStateContext";
import Spinner from "./Spinner";

export default function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telError, setTelError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsNotVerified } = useGlobalState();

  const register = async () => {
    setNameError("");
    setEmailError("");
    setTelError("");

    setLoading(true);

    const formData = {
      name,
      email,
      phone: tel,
    };

    try {
      const response = await fetch(
        "https://api.decodingthefuture.xyz/api/v1/event-registration/register",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-PINGOTHER": "pingpong",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = `HTTP error status: ${
          response.status
        }, Message: ${JSON.stringify(errorResponse.data)}`;

        if (errorResponse.data.name) setNameError(errorResponse.data.name[0]);
        if (errorResponse.data.email)
          setEmailError(errorResponse.data.email[0]);
        if (errorResponse.data.phone) setTelError(errorResponse.data.phone[0]);

        throw new Error(errorMessage);
      }

      const result = await response.json();

      sessionStorage.setItem("emailToVerify", email);
      setIsNotVerified(true);
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register();
      }}
      className="w-[291px] mx-auto lg:mx-0"
    >
      <div className="mb-3">
        <InputBox
          type="text"
          placeholder="Name"
          value={name}
          onChange={(newValue: string) => {
            setName(newValue);
          }}
        />
        {nameError && <p className="text-red-500">{nameError}</p>}
      </div>

      <div className="mb-3">
        <InputBox
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(newValue: string) => {
            setEmail(newValue);
          }}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>

      <div className="mb-3">
        <InputBox
          type="tel"
          placeholder="Phone Number"
          value={tel}
          onChange={(newValue: string) => {
            setTel(newValue);
          }}
        />
        {telError && <p className="text-red-500">{telError}</p>}
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-[#16A0FF] text-white font-medium rounded-lg"
      >
        {loading ? <Spinner /> : "Join Us"}
      </button>
    </form>
  );
}
