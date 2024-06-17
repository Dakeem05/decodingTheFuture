/* eslint-disable @next/next/no-img-element */
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import EventRegistration from "@/components/EventRegistration";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1100px] mobile-bg mx-auto">
      <div className="backdrop-blur-md md:backdrop-blur-0">
      <header className="py-3 px-3 md:px-0">
        <Image src="/assets/logo.svg" alt="logo" width={150} height={25} />
      </header>

      <div className="flex items-center md:pt-0 lg:justify-between md:mt-10">
        <div className="md:mobile-bg-remove">
          <div className="py-5 h-[90vh] md:h-auto px-3 md:px-0">
            <h1 className="text-white text-center lg:text-left">
              We are
              <br className="hidden md:block" /> coming soon
            </h1>
            <p className="md:w-[450px] text-center lg:text-left text-white font-xeroda my-5">
              Decoding the Future is a 5-Day event designed to empower aspiring
              tech enthusiasts and future leaders through immersive workshops
              and conference on AI/XR & IoT, Blockchain, Cybersecurity, Career &
              Finance.
            </p>
            <EventRegistration />
            <div className="text-white mt-10 flex items-center space-x-5 w-max lg:w-full mx-auto lg:mx-0">
              <FaFacebook className="w-5 h-5 cursor-pointer" />
              <BsTwitterX className="w-5 h-5 cursor-pointer" />
              <FaInstagram className="w-5 h-5 cursor-pointer" />
              <FaLinkedin className="w-5 h-5 cursor-pointer" />
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
