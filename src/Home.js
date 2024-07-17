import React, { useEffect, useState } from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import dlr from "./asset/logo.png";

import img7 from "./asset/first_upload-removebg-preview.png";
import "./style.css";
import { FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { LuArrowBigDownDash } from "react-icons/lu";


const Home = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  // const [isHovered5, setIsHovered5] = useState(false);

  return (
    <div className="text-[#ff5f1f] ">
      <div className="container mx-auto px-4">
        {/* Grid for desktop layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 mt-8 ">
          <div className="col-span-2 p-2 border-orange-600 hover:border-white shadow-lg">
            <a href="www" className="btn btn-circle mr-8">
              <div className="rounded-full border-2 hover:border-orange-600 hover:animate-pulse p-4 ml-2 shadow-lg shadow-orange-600">
                <span className="text-orange-600 text-4xl">
                  <BsTwitterX />
                </span>
              </div>
            </a>
            <a href="https://www.google.com" className="btn btn-circle">
              <div className="rounded-full border-2 hover:animate-pulse hover:border-orange-600 shadow-lg shadow-orange-600 p-4 ml-2">
                <span className="text-orange-600 text-4xl">
                  <PiTelegramLogo />
                </span>
              </div>
            </a>
            <p className="text-center mt-2 border-b-2  border-white shadow-xl shadow-orange-600 rounded-full">
              Join Us
            </p>
          </div>

          <div className="col-span-8">
            <div className="rounded-full  shadow-xl shadow-orange-600 flex justify-center items-center">
              <img src={dlr} alt="Dollar" className="w-[36rem]" />
            </div>

            <p className="border-b-4 border-orange-600 shadow-xl shadow-orange-600 rounded-full  uppercase text-3xl font-extrabold text-orange-600 mt-4 ">
              <span className=""> Rabbit Star coin</span>
            </p>
          </div>

          <div className="col-span-2 mt-6">
            <button className="indicator">
              <div className="border-2 p-6 px-12 rounded-full text-xl shadow-lg shadow-orange-600 text-center">
                RBSC
              </div>
            </button>
          </div>
        </div>

        {/* Flexbox for mobile and tablet layout */}
        <div className="lg:hidden flex flex-col">
          <div className="mb-4">
            <div className="rounded-full  shadow-xl shadow-orange-600 flex justify-center items-center">
              <img src={dlr} alt="Dollar" className="w-[16rem]" />
            </div>

            <p className="border-b-4 border-[#0000f7] shadow-xl shadow-white rounded-full  uppercase text-2xl font-extrabold text-orange-600 mt-4">
              Rabbit Star coin
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="flex-1">
              <div className="p-2 border-2 rounded-full border-orange-600 hover:border-white shadow-md shadow-white">
                <button className="btn btn-circle mr-8">
                  <div className="rounded-full border-2 hover:border-orange-600 hover:animate-pulse p-4 ml-2 shadow-lg shadow-white">
                    <span className="text-orange-600 text-1xl">
                      <BsTwitterX />
                    </span>
                  </div>
                </button>
                <button className="btn btn-circle">
                  <div className="rounded-full border-2 hover:animate-pulse hover:border-orange-600 shadow-lg shadow-white p-4 ml-2">
                    <span className="text-orange-600 text-1xl">
                      <PiTelegramLogo />
                    </span>
                  </div>
                </button>
              </div>
              <div className="rounded-full border-2 hover:animate-pulse hover:border-orange-600 shadow-lg shadow-white p-2 ml-2 mt-2">
                <span className="text-orange-600 text-1xl">
                  <p className="text-center">Join us</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:grid grid-cols-12 items-center">
          <div className="col-span-12">
            <p className="text-4xl lg:text-5xl text-center text-orange-600 uppercase font-extrabold">
              Discover Your Mastery <br /> Master the Crypto Exchange
            </p>
            <div className="flex lg:gap-8 justify-center md:mt-8 mt-8 mb-8 flex-wrap">
              <a
                href="w"
                className="border rounded-full p-2 shadow-md shadow-orange-600 text-red-700 text-4xl relative"
                onMouseEnter={() => setIsHovering1(true)}
                onMouseLeave={() => setIsHovering1(false)}
              >
                <FaYoutube />
                {/* Conditional rendering of text */}
                {isHovering1 && (
                  <span className="absolute bg-black text-orange-600 text-xs py-1 px-2 rounded-md bottom-0 left-1/2 transform -translate-x-1/2 -mb-8">
                    Youtube
                  </span>
                )}
              </a>
              <a
                href="w"
                className="border rounded-full p-2 shadow-md shadow-orange-600 text-pink-600 text-4xl relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <SiTiktok />
                {/* Conditional rendering of text */}
                {isHovering && (
                  <span className="absolute bg-black text-orange-600  text-xs py-1 px-2 rounded-md bottom-0 left-1/2 transform -translate-x-1/2 -mb-8">
                    Tiktok
                  </span>
                )}
              </a>
              <a
                href="w"
                className="border rounded-full p-2 shadow-md shadow-orange-600 text-white text-4xl relative"
                onMouseEnter={() => setIsHovering2(true)}
                onMouseLeave={() => setIsHovering2(false)}
              >
                <BsTwitterX />
                {/* Conditional rendering of text */}
                {isHovering2 && (
                  <span className="absolute bg-black text-orange-600   text-xs py-1 px-2 rounded-md bottom-0 left-1/2 transform -translate-x-1/2 -mb-8 ">
                    twitter
                  </span>
                )}
              </a>
              <a
                href="w"
                className="border rounded-full p-2 shadow-md shadow-orange-600 text-blue-700 text-4xl relative"
                onMouseEnter={() => setIsHovering3(true)}
                onMouseLeave={() => setIsHovering3(false)}
              >
                <PiTelegramLogo />
                {/* Conditional rendering of text */}
                {isHovering3 && (
                  <span className="absolute bg-black text-orange-600  text-xs py-1 px-2 rounded-md bottom-0 left-1/2 transform -translate-x-1/2 -mb-8">
                    Telegram
                  </span>
                )}
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 items-center">
          <div className="col-span-1"></div>
          {/* <img
            className="col-span-2 lg:block hidden max-w-full"
            src={img7}
            alt=""
          /> */}
          <p className="col-span-full text-xl font-extrabold text-center text-orange-600 ">
            Climb the ranks from a humble beginner to the esteemed Grand Master
            of a tier-1 crypto exchange. <br /> Purchase upgrades, conquer
            challenges, invite friends, and ascend to greatness.
          </p>
          {/* <img
            className="col-span-2 lg:block hidden max-w-full"
            src={img7}
            alt=""
          /> */}
          <div className="col-span-1"></div>
        </div>
        {/* <button className="btn  btn-md  md:btn-md  lg:w-full lg:p-0    rounded-full shadow-lg shadow-white bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 hover:bg-[#171719] hover:text-orange-600 lg:mt-5 mt-12">
          <span className="text-4xl animate-bounce text-orange-600">
            {" "}
            <BsFillFastForwardBtnFill />
          </span>

          <span className=" lg:text-4xl text-base "> Play Now</span>
        </button> */}

        <a
          href="#_"
          class="relative rounded-3xl inline-flex items-center justify-start py-5 pl-4 pr-12 lg:w-96 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out shadow-lg shadow-orange-600 hover:pl-10 hover:pr-6 bg-orange-600 group hover:bg-orange-600 hover:shadow-orange-600 lg:mt-20 mt-12 button-glow-shadow"
        >
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#171719] group-hover:h-full"></span>
          <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white text-2xl uppercase text-black font-extrabold">
            Play Now
          </span>
        </a>
      </div>
      <div className="lg:mt-20 mt-8 text-3xl">
        <div className="flex flex-col items-center">
          <p className="lg:text-5xl font-bold mb-8 text-orange-">Conception</p>
          <p className="text-8xl lg:mb-6">
            <LuArrowBigDownDash />
          </p>
        </div>

        <div className="glow-container relative  ">
          <img
            className="absolute right-14 bottom-5 z-50 lg:block hidden  "
            src={img7}
            alt=""
          />
          <div className="container mx-auto p-4 w-full lg:flex justify-evenly items-start rounded-lg shadow-lg shadow-orange-600 bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 bg-[#171719] hover:text-orange-600 lg:mt-5 mt-6 multi-glow-shadow">
            <div className="lg:w-1/4">
              <p className="text-4xl text-left mb-2 lg:mb-0 text-white lg:text-orange-600">
                November 2024
              </p>
            </div>
            <div className="lg:w-3/4 text-left text-base">
              <ul className="list-disc ml-5">
                <li>Basic game</li>
                <li>Earn tasks</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>
          {/* October 2024 */}
          <div className="container mx-auto p-4 w-full lg:flex justify-evenly items-start rounded-lg shadow-lg shadow-orange-600 bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 bg-[#171719] hover:text-orange-600 lg:mt-5 mt-12 multi-glow-shadow ">
            <div className="lg:w-1/4">
              <p className="text-4xl text-left mb-2 lg:mb-0 text-white lg:text-orange-600">
                October 2024
              </p>
            </div>
            <div className="lg:w-3/4 text-left text-base">
              <ul className="list-disc ml-5">
                <li>Web 3 pre-listing Quest</li>
                <li>Integrating wallets into the game</li>
                <li>Building on-chain infrastructure</li>
              </ul>
            </div>
          </div>

          {/* September 2024 */}
          <div className="container mx-auto p-4 w-full lg:flex justify-evenly items-start rounded-lg shadow-lg shadow-orange-600 bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 bg-[#171719] hover:text-orange-600 lg:mt-5  multi-glow-shadow mt-5">
            <div className="lg:w-1/4">
              <p className="text-4xl text-left mb-2 lg:mb-0 text-white lg:text-orange-600">
                September 2024
              </p>
            </div>
            <div className="lg:w-3/4 text-left text-base">
              <ul className="list-disc ml-5">
                <li>Force Rabbit Star</li>
                <li>Token Generation</li>
                <li>Launch of Token Utility In-Game</li>
              </ul>
            </div>
          </div>

          {/* August 2024 */}
          <div className="container mx-auto p-4 w-full lg:flex justify-evenly items-start rounded-lg shadow-lg shadow-orange-600 bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 bg-[#171719] hover:text-orange-600 lg:mt-5 mt-12 multi-glow-shadow">
            <div className="lg:w-1/4">
              <p className="text-4xl text-left mb-2 lg:mb-0 text-white lg:text-orange-600">
                August 2024
              </p>
            </div>
            <div className="lg:w-3/4 text-left text-base">
              <ul className="list-disc ml-5">
                <li>Rabbit Star Coin</li>
                <li>Events with a time constraint</li>
                <li>Live events</li>
              </ul>
            </div>
          </div>

          {/* Start 2024 */}
          <div className="container mx-auto p-4 w-full lg:flex justify-evenly items-start rounded-lg shadow-lg shadow-orange-600 bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 bg-[#171719] hover:text-orange-600 lg:mt-5 mt-12 multi-glow-shadow">
            <div className="lg:w-1/4">
              <p className="text-4xl text-left mb-2 lg:mb-0 text-white lg:text-orange-600">
                Start 2024
              </p>
            </div>
            <div className="lg:w-3/4 text-left text-base">
              <p>
                Many more surprises await, <br /> but we'll keep them secret{" "}
                <br /> to preserve your excitement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-2 border-orange-600 hover:border-white shadow-lg mt-20">
        <a href="www" className="btn btn-circle mr-8">
          <div className="rounded-full border-2 hover:border-orange-600 hover:animate-pulse p-4 ml-2 shadow-lg shadow-orange-600">
            <span className="text-red-600 text-4xl">
              <FaYoutube />
            </span>
          </div>
        </a>
        <a href="https://www.google.com" className="btn btn-circle">
          <div className="rounded-full border-2 hover:animate-pulse hover:border-orange-600 shadow-lg shadow-orange-600 p-4 ml-2">
            <span className="text-orange-600 text-4xl">
              <PiTelegramLogo />
            </span>
          </div>
        </a>
        <p className="text-center mt-2 border-b-2  border-white shadow-xl shadow-orange-600 rounded-full"></p>
      </div>
    </div>
  );
};

export default Home;
