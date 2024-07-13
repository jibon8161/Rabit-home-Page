import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import dlr from "./png-clipart-money-dollars-money-dollar-removebg-preview.png";
import img9 from "./asset/9.png";
import img7 from "./asset/7.png";

const Home = () => {
  return (
    <div className="text-[#ff5f1f] min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Grid for desktop layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-2 p-2 border-orange-600 hover:border-white shadow-lg">
            <button className="btn btn-circle mr-8">
              <div className="rounded-full border-2 hover:border-orange-600 hover:animate-pulse p-4 ml-2 shadow-lg shadow-white">
                <span className="text-orange-600 text-4xl">
                  <BsTwitterX />
                </span>
              </div>
            </button>
            <button className="btn btn-circle">
              <div className="rounded-full border-2 hover:animate-pulse hover:border-orange-600 shadow-lg shadow-white p-4 ml-2">
                <span className="text-orange-600 text-4xl">
                  <PiTelegramLogo />
                </span>
              </div>
            </button>
            <p className="text-center mt-2 border-b-2 border-orange-600 shadow-xl shadow-white rounded-full">
              Join Us
            </p>
          </div>

          <div className="col-span-8">
            <img src={dlr} alt="Dollar" className="h-54 mx-auto w-32" />
          </div>

          <div className="col-span-2 mt-6">
            <button className="indicator">
              <span className="indicator-item badge text-white">
                Coming soon
              </span>
              <div className="border-2 p-6 rounded-full text-xl shadow-lg shadow-orange-600 text-center">
                Blackpaper
              </div>
            </button>
          </div>
        </div>

        {/* Flexbox for mobile and tablet layout */}
        <div className="lg:hidden flex flex-col">
          <div className="mb-4">
            <img src={dlr} alt="Dollar" className="h-32 mx-auto max-w-full" />
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
          <img
            className="col-span-2 lg:block hidden max-w-full"
            src={img9}
            alt=""
          />
          <div className="col-span-8">
            <p className="text-4xl lg:text-5xl text-center text-orange-600 uppercase font-extrabold">
              Unleash your inner CEO
            </p>
            <div className="flex lg:gap-8 justify-center md:mt-8 mt-8 mb-8 flex-wrap">
              <span className="border rounded-full p-2 shadow-md shadow-orange-600">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2 shadow-md shadow-orange-600">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2 shadow-md shadow-orange-600">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2 shadow-md shadow-orange-600">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2 shadow-md shadow-orange-600">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2 shadow-md shadow-orange-600">
                <BsTwitterX />
              </span>
            </div>
          </div>
          <img
            className="col-span-2 lg:block hidden max-w-full"
            src={img9}
            alt=""
          />
        </div>

        <div className="grid lg:grid-cols-12 items-center">
          <div className="col-span-1"></div>
          <img
            className="col-span-2 lg:block hidden max-w-full"
            src={img7}
            alt=""
          />
          <p className="col-span-6 text-sm font-light text-center text-orange-600">
            Make your way from the shaved hamster to the grandmaster CEO of the
            tier-1 crypto exchange <br />
            Buy upgrades, complete quests, invite friends and become the best
          </p>
          <img
            className="col-span-2 lg:block hidden max-w-full"
            src={img7}
            alt=""
          />
          <div className="col-span-1"></div>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full p-0 rounded-full shadow-lg shadow-white bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 hover:bg-[#171719] hover:text-orange-600 lg:mt-5 mt-12">
          <span className="animate-bounce lg:text-4xl"> Play Now</span>
        </button>
      </div>
      <div className="lg:mt-36 mt-16 text-3xl">
        <p className="">Roadmap</p>
        <div className="container mx-auto p-6 w-full lg:flex justify-around items-center rounded-lg shadow-lg shadow-orange-600 bg-orange-00 text-white lg:hover:text-white lg:hover:shadow-orange-600 bg-[#171719] hover:text-orange-600 lg:mt-5 mt-12">
          <p className="lg:text-6xl text-4xl text-left mb-2 lg:mb-0 text-white lg:text-orange-600">
            March 2024
          </p>
          <div className="text-left">
            <li>Basic game</li>
            <li>Mining updates</li>
            <li>Earn tasks</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
