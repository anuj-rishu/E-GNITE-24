import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Speaker from "./Speaker";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  // State to store timer values
  const [timerValues, setTimerValues] = useState([
    { label: "DAYS", value: 0 },
    { label: "HOURS", value: 0 },
    { label: "MIN", value: 0 },
    { label: "SEC", value: 0 },
  ]);

  // Timer function
  const calculateTimeRemaining = () => {
    // Get the current date and time
    const now = new Date().getTime();

    // Replace the following line with your event date and time
    const eventTime = new Date("2024-03-18T11:00:00").getTime();

    const timeRemaining = eventTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the timer values in state
    setTimerValues([
      { label: "DAYS", value: days },
      { label: "HOURS", value: hours },
      { label: "MIN", value: minutes },
      { label: "SEC", value: seconds },
    ]);
  };

  useEffect(() => {
    calculateTimeRemaining();

    // Update the timer every second
    const timerInterval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <div className=" h-auto mt-10 md:mt-16 lg:mt-20 xl:mt-20 mb-20 flex ">
        {/* left  */}
        <div className=" z-20 w-full md:w-full lg:w-[50%] xl:w-[50%] ">
          <div className="  min-h-64 ">
            <h1 className="font-bold  cinzel-font text-6xl md:text-6xl lg:text-7xl xl:text-8xl ">
              <span className="text-[#FB771B]">EGNITE'</span>24
            </h1>
            <p className="mt-4  text-base md:text-base lg:text-xl xl:text-xl 2xl:text-2xl text-justify">
            Are you brimming with innovative ideas but unsure how to take the next step? Look no further than E-GNITE, the ultimate event designed to ignite your entrepreneurial spirit!  Connect with a vibrant community of like-minded visionaries, eager to share their passion and fuel yours. Learn from industry experts who will equip you with the knowledge and skills needed to turn your ideas into reality. Don't miss this incredible opportunity to network, grow, and set the stage ablaze with groundbreaking concepts. Join us at E-GNITE and ignite your path to entrepreneurial success!
            </p>
          </div>
          {/* timer */}
          <div className="mt-16 flex justify-center md:justify-normal lg:justify-normal xl:justify-normal items-center">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              {timerValues.map((timer, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col p-2  font-semibold rounded-box text-[#FB771B]"
                  >
                    <span className="countdown flex justify-center  font-semibold font-mono text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                      {/* {timer.value} */}
                      0
                    </span>
                    {timer.label}
                  </div>
                  {index !== timerValues.length - 1 && (
                    <p className="flex  mb-8 sm:flex md:flex lg:flex xl:flex items-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold  sm:font-extrabold md:font-extrabold lg:font-extrabold xl:font-extrabold">
                      :
                    </p>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className=" mb-2 mt-6 md:mt-6 lg:mt-10 xl:mt-20  flex justify-center items-center">
            <Link href="/register" className="rounded-lg px-3 py-2 bg-[#FB771B] flex items-center justify-center font-medium sm:font-semibold md:font-semibold lg:font-semibold xl:font-semibold text-white  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl">
              Register Now
              <FaArrowRightToBracket
                className="ml-2 flex items-center"
                style={{ backgroundColor: "transparent" }}
              />{" "}
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="z-10 drop-shadow-{40}  w-[50%] mt-2   px-4 hidden md:hidden lg:flex xl:flex justify-center">
          {/* image */}
          

            <Image src="/l_bg.svg" width={100} height={100} className=" relative   shadow-xl top-0  w-[100%] h-fit " alt="Ishan Sharma" />
          
          
          
        </div>
      </div>

    {/* Speaker Component */}
    <div>

      <Speaker/>
    </div>

    </>
  );
};

export default Landing;