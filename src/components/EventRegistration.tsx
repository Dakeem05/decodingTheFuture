"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import InputBox from "./InputBox";

export default function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const validateInputs = () => {
    let tempErrors = {
      name: "",
      email: "",
      tel: "",
    };

    if (!name.trim()) {
      tempErrors.name = "Name is required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!/^\+?\d{6,15}$/.test(tel)) {
      tempErrors.tel = "Phone number is not valid.";
    }

    setErrors(tempErrors);
  };

  const register = async () => {
    validateInputs();

    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

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
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-PINGOTHER": "pingpong",
          },
          body: JSON.stringify(formData),
        }
      );

        if (!response.ok) {
        console.error(`HTTP error res: ${await response.text()}`);
        throw new Error(`HTTP error status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(`HTTP error messa: ${error}`);
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
      <div className="mb-3">
        <InputBox
          type="text"
          placeholder="Name"
          value={name}
          onChange={(newValue: string) => {
            setName(newValue);
          }}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
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
        {errors.email && <p className="text-red-500">{errors.email}</p>}
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
        {errors.tel && <p className="text-red-500">{errors.tel}</p>}
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-[#16A0FF] text-white font-medium rounded-lg"
      >
        Join Us
      </button>
    </form>
  );
}
