"use client";

import OTPInput from "react-otp-input";
import DisableScroll from "./DisableScroll";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/context/GlobalStateContext";
import Spinner from "./Spinner";

export default function VerifyOTP() {
  let email = sessionStorage.getItem("emailToVerify");
  const [otp, setOtp] = useState("");
  const { setIsNotVerified } = useGlobalState();
  const { setIsRegistered } = useGlobalState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const verifyEmail = async () => {
    setLoading(true);
    const formData = {
      email,
      otp,
    };

    try {
      const response = await fetch(
        "https://api.decodingthefuture.xyz/api/v1/event-registration/verify",
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

        throw new Error(errorMessage);
      }

      const result = await response.json();
      sessionStorage.clear();

      if (result.success) {
        setIsRegistered(true);
        // router.push("/successful");
      }

      setIsNotVerified(false);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    try {
      const response = await fetch(
        `https://api.decodingthefuture.xyz/api/v1/event-registration/resend/${email}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-PINGOTHER": "pingpong",
          }
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = `HTTP error status: ${
          response.status
        }, Message: ${JSON.stringify(errorResponse.data)}`;

        throw new Error(errorMessage);
      }

      const result = await response.json();

      alert(`A new OTP has been sent to ${email}`)
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="w-max mx-auto mb-3">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={{
            width: "3rem",
            height: "3rem",
            margin: "0 0.2rem",
            fontSize: "1.5rem",
            borderRadius: "4px",
            border: "1px solid #8A8A8A",
            backgroundColor: "#FFFFFF1A",
            color: "white",
          }}
          renderInput={(props) => <input {...props} />}
        />

        <div className="flex mt-2 space-x-1 items-center w-fit mx-auto text-white text-sm">
          <p>Didn&apos;t get the code? </p>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              resendOTP();
            }}
            className="text-[#16A0FF] ml-0"
          >
            Resend
          </button>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          verifyEmail();
        }}
        className="w-full p-3 bg-[#16A0FF] text-white font-medium rounded-lg"
      >
        {loading ? <Spinner /> : "Verify OTP"}
      </button>
    </form>
  );
}
