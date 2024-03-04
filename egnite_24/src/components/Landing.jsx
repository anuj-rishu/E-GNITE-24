import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Speaker from "./Speaker";

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
    const eventTime = new Date("2024-03-15T13:24:00").getTime();

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
            <h1 className="font-bold text-6xl md:text-6xl lg:text-7xl xl:text-8xl ">
              <span className="text-[#FB771B]">EGNITE'</span>24
            </h1>
            <p className="mt-4  text-base md:text-base lg:text-xl xl:text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              animi magni commodi inventore eligendi, dolor debitis voluptatum.
              Esse iure itaque tempore? Nobis libero quidem ratione, soluta
              doloribus, deleniti totam dolorem aspernatur, id officiis fugiat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              cupiditate expedita, a, ipsum magni alias, dolores quaerat qui
              explicabo officiis iste corrupti repellat rem?
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
                      {timer.value}
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
            <button className="rounded-lg px-3 py-2 bg-[#FB771B] flex items-center justify-center font-medium sm:font-semibold md:font-semibold lg:font-semibold xl:font-semibold text-white  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl">
              Register with Google
              <FaArrowRightToBracket
                className="ml-2 flex items-center"
                style={{ backgroundColor: "transparent" }}
              />{" "}
            </button>
          </div>
        </div>
        {/* right */}
        <div className="z-10 drop-shadow-{40}  w-[50%] mt-2   px-4 hidden md:hidden lg:flex xl:flex justify-center">
          {/* image */}
          

            <img src="/l_bg.svg" className=" relative   shadow-xl top-0  w-[100%] h-fit " alt="" />
          
          
          
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
