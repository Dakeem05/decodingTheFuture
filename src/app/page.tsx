/* eslint-disable @next/next/no-img-element */
"use client";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import EventRegistration from "@/components/EventRegistration";
import Link from "next/link";
import VerifyOTP from "@/components/VerifyOTP";
import Successful from "@/components/Successful";
import Image from "next/image";
import { useGlobalState } from "@/context/GlobalStateContext";

export default function Home() {
  const { isNotVerified } = useGlobalState();
  const { isRegistered } = useGlobalState();

  return (
    <main className=" lg:px-3 xl:px-0 max-w-[1100px] mobile-bg mx-auto">
      <div className="backdrop-blur-md min-h-screen lg:backdrop-blur-0">
        <header className="py-3 px-3 lg:px-0">
          <Image src="/assets/logo.svg" alt="logo" width={223} height={60} />
        </header>
        <div className="flex items-center md:pt-0 lg:justify-center lg:mt-10">
          <div className="h-full flex items-center justify-center">
            <div className="py-5 px-3 lg:px-0">
              <h1 className="text-white text-center lg:text-left">
                We are
                <br className="hidden md:block" /> coming soon
              </h1>
              <p className="lg:w-[450px] text-center lg:text-left text-white font-xeroda my-5">
                Decoding the Future is a 5-Day event designed to empower
                aspiring tech enthusiasts and future leaders through immersive
                workshops and conference on AI/XR & IoT, Blockchain,
                Cybersecurity, Career & Finance.
              </p>

              {isRegistered ? <Successful/> : (isNotVerified ? <VerifyOTP /> : <EventRegistration />)}

              <div className="text-white mt-10 flex items-center space-x-5 w-max lg:w-full mx-auto lg:mx-0">
                <Link
                  href="https://web.facebook.com/profile.php?id=61556141437339"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="w-5 h-5 cursor-pointer" />
                </Link>
                <Link
                  href="https://x.com/Focosauniuyo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitterX className="w-5 h-5 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-2/3 hidden lg:block 2xl:flex items-center relative">
            <img
              src="/assets/vr.png"
              alt="Woman in Virtual Reality"
              className="object-cover w-[558px] h-full block ml-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
