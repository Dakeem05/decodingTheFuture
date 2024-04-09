/* eslint-disable @next/next/no-img-element */
import InputBox from "@/components/InputBox";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <main className="max-h-screen overflow-hidden max-w-screen-lg mx-auto">
      <header className="h-[15vh] py-3 px-3 md:px-0">
        <img src="/assets/logo.svg" alt="Woman in Virtual Reality" className="object-cover h-14"/>
      </header>
      <div className="flex min-h-screen md:max-h-[85vh] items-center justify-center md:justify-between">
        <div className="">
          <h1 className="text-white mb-5">We are coming soon</h1>
          <form action="" className="w-[291px]">
            <InputBox type="text" placeholder="Name" />
            <InputBox type="email" placeholder="Email Address" />
            <InputBox type="tel" placeholder="Phone Number" />
            <button className="w-full p-3 bg-[#16A0FF] text-white font-medium rounded-lg">
              Join Us
            </button>
          </form>
          <div className="text-white mt-14 flex items-center space-x-5">
            <FaFacebook className="w-5 h-5 cursor-pointer" />
            <BsTwitterX className="w-5 h-5 cursor-pointer" />
            <FaInstagram className="w-5 h-5 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="w-2/3 hidden md:block min-h-screen 2xl:flex items-center relative">
          <img
            src="/assets/vr.png"
            alt="Woman in Virtual Reality"
            className="object-cover w-[558px] block absolute 2xl:relative bottom-0 right-0"
          />
        </div>
      </div>
    </main>
  );
}
