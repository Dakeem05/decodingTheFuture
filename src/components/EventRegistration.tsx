"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import InputBox from "./InputBox";

export default function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const register = async () => {
    const formData = {
      name,
      email,
      phone: tel,
    };

    console.log(formData);

    try {
      const response = await fetch(
        "https://api.decodingthefuture.xyz/api/v1/event-registration/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
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
      <InputBox
        type="text"
        placeholder="Name"
        value={name}
        onChange={(newValue: string) => setName(newValue)}
      />
      <InputBox
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(newValue: string) => setEmail(newValue)}
      />
      <InputBox
        type="tel"
        placeholder="Phone Number"
        value={tel}
        onChange={(newValue: string) => setTel(newValue)}
      />
      <button
        type="submit"
        className="w-full p-3 bg-[#16A0FF] text-white font-medium rounded-lg"
      >
        Join Us
      </button>
    </form>
  );
}
