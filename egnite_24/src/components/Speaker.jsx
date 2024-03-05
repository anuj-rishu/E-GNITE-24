
import React from "react";

const Speaker = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* heading */}
        <div>
          <h1 className="relative text-transparent text-5xl">
            <span className="bg-gradient-to-t from-orange-500 to-white bg-clip-text underline underline-offset-8">
              OUR SPEAKER
            </span>
            <span className="  absolute  bottom-[-0.5rem] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-sm"></span>
          </h1>
        </div>

        {/* speaker image */}
        <div className="mt-28 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between gap-10">
          {/* right */}
          <div className="">
            <img src="/s1cr.png" className="h-72 w-72" alt="speaker1" />
            <div className="  text-right font-semibold text-white">
                <h1 className=" text-[1.6rem] sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">Ankush Barjata</h1>
              
            </div>
            <div className=" flex flex-col items-end">
              <p>
                Founder <span className="font-bold text-orange-500">DEEVA</span>
              </p>
              <p className="font-medium text-lg">
                <span className="text-[#0199CB]">SHARK TANK</span>
                <span className="text-[#FDDE6D]"> INDIA</span> FINALIST
              </p>
            </div>
          </div>
          {/* left */}
          <div className="">
            <img src="/s2.svg" className="h-72 w-72" alt="speaker2" />
            <div className="font-semibold text-white">
                <h1 className=" text-[1.6rem] sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">

              Rupavahini Selvaraj
                </h1>
            </div>
            <div>
              <p>
                Associate Director{" "}
                <span className="font-bold text-orange-500 ">HCLTech</span>
              </p>
              <div className="flex items-center text-lg font-medium text-white">
                <p>ex-VP at</p>
                <img src="/s2ex.svg" className=" ml-2 h-6 w-20" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Time Venu */}
        <div className="my-20 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center sm:divide-y-2 divide-y-2 md:divide-y-0 lg:divide-y-0 xl:divide-y-0  md:divide-x-2 lg:divide-x-2 xl:divide-x-2 divide-white
        
        ">
            <div className="flex  items-center pr-4 pb-4 gap-3 ">
                <div className=" text-7xl sm:text-7xl lg:text-8xl xl:text-8xl md:text-8xl">
                    18
                </div>
                <div className="flex flex-col text-[1.5rem] sm:text-[1.8rem] xl:text-[1.8rem] lg:text-[1.8rem] md:text-[1.8rem]">
                    <p>MARCH</p>
                    <p>2024</p>
                </div>

            </div>
            <div className="flex flex-col text-[1.5rem] sm:text-[1.8rem] xl:text-[1.8rem] lg:text-[1.8rem] md:text-[1.8rem] pl-4 pt-4">
                <p>T.P. Ganesan Auditorium</p>
                <p>11:00 AM <span>onwards</span></p>

            </div>



        </div>
      </div>
    </>
  );
};

export default Speaker;
