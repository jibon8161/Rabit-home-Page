import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import dlr from "./png-clipart-money-dollars-money-dollar-removebg-preview.png";
import img9 from "./asset/9.png";
import img7 from "./asset/7.png";

const Home = () => {
  return (
    <div className="text-[#ff5f1f] min-h-screen">
      <div className="container mx-auto">
        {/* Grid for desktop layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-2 p-2  border-orange-600 hover:border-white shadow-lg">
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
            <img src={dlr} alt="Dollar" className="h-54 mx-auto" />
          </div>

          <div className="col-span-2 mt-6">
            <button className="indicator">
              <span className="indicator-item badge text-cyan-300">
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
          <div className="mb-4 ">
            <img src={dlr} alt="Dollar" className="h-32 mx-auto " />
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="col-span-2 p-2 border-2 rounded-full border-orange-600 hover:border-white shadow-md shadow-white">
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
          <img className="col-span-2 lg:block hidden" src={img9} alt="" />
          <div className="col-span-8">
            <p className="text-4xl lg:text-5xl text-center text-orange-600 uppercase">
              Unleash your inner CEO
            </p>
            <div className="flex lg:gap-8 justify-center md:mt-8 mt-8 mb-8">
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
              <span className="border rounded-full p-2">
                <BsTwitterX />
              </span>
            </div>
          </div>
          <img className="col-span-2 lg:block hidden " src={img9} alt="" />
        </div>
        <div className="grid lg:grid-cols-12 items-center">
          <div className="col-span-1"></div>
          <img className="col-span-2 lg:block hidden" src={img7} alt="" />
          <p className="col-span-6 text-sm font-light text-center text-orange-600">
            Make your way from the shaved hamster to the grandmaster CEO of the
            tier-1 crypto exchange <br />
            Buy upgrades, complete quests, invite friends and become the best
          </p>
          <img className="col-span-2 lg:block hidden" src={img7} alt="" />
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
