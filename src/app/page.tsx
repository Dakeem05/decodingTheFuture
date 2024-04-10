/* eslint-disable @next/next/no-img-element */
import InputBox from "@/components/InputBox";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <main className="max-h-screen overflow-hidden max-w-screen-lg mx-auto">
      <header className="md:h-[10vh] py-3 px-3 md:px-0">
        <img src="/assets/logo.svg" alt="Woman in Virtual Reality" className="object-cover h-7 md:h-14"/>
      </header>
      <div className="flex min-h-screen lg:max-h-[90vh] items-center justify-center lg:justify-between">
        <div className="">
          <h1 className="text-white mb-5">We are coming soon</h1>
          <form action="" className="w-[291px] mx-auto lg:mx-0">
            <InputBox type="text" placeholder="Name" />
            <InputBox type="email" placeholder="Email Address" />
            <InputBox type="tel" placeholder="Phone Number" />
            <button className="w-full p-3 bg-[#16A0FF] text-white font-medium rounded-lg">
              Join Us
            </button>
          </form>
          <div className="text-white mt-10 flex items-center space-x-5 w-max lg:w-full mx-auto lg:mx-0">
            <FaFacebook className="w-5 h-5 cursor-pointer" />
            <BsTwitterX className="w-5 h-5 cursor-pointer" />
            <FaInstagram className="w-5 h-5 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="w-2/3 hidden lg:block min-h-screen 2xl:flex items-center relative">
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
