import React, { useState, useEffect } from "react";

const Track = ({ ticketStatus, download }) => {
    


   
  return (
    <>
      <div class="hidden  md:gap-8  lg:gap-0 xl:gap-0items-center lg:items-start xl:items-start md:flex    lg:flex-col xl:flex-col justify-center  sm:justify-center md:justify-center lg:self-start xl:self-start mt-5 whitespace-nowrap basis-0 lg:min-w-max xl:min-w-max">
        <div class="flex gap-4 justify-between items-center text-xl font-semibold text-orange-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a7e74ed2a1a1e12cf647fbd737faa53e5991c4f2668baaa0b4b0f14e0977c6?apiKey=033e0929b6f8436697d44eb51eae1ca6&"
            class="w-8 aspect-square"
            alt="1"
          />
          <div class="flex-auto">
            <span class="hidden  md:inline lg:inline xl:inline">Register</span>
            <span class="inline md:hidden  xl:hidden lg:hidden">1</span>
          </div>
        </div>
        <div class="mt-4 ml-4 hidden lg:flex xl:flex bg-orange-400 rounded-sm h-[120px] w-1 max-md:ml-2.5"></div>
        {ticketStatus ? (
          <>
            <div class="flex   gap-4 justify-between items-center text-xl font-semibold text-orange-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a7e74ed2a1a1e12cf647fbd737faa53e5991c4f2668baaa0b4b0f14e0977c6?apiKey=033e0929b6f8436697d44eb51eae1ca6&"
                class="w-8 lg:mt-4 xl:mt-4  ml-2 aspect-square"
                alt="2"
              />
              <div class="flex lg:mt-4  xl:mt-4 items-center">
                <span class="hidden  md:inline lg:inline xl:inline">
                  Fill Personal Details
                </span>
                <span class="inline md:hidden  xl:hidden lg:hidden">2</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div class="flex gap-4 justify-between items-center text-xl font-semibold text-white">
              <div class="justify-center mt-2 md:mt-2 lg:mt-4 xl:mt-4 items-center px-3 h-8 text-xl font-medium leading-6 text-center text-orange-500 bg-black aspect-square rounded-[32px]">
                2
              </div>

              <div class="flex items-center lg:mt-2 xl:mt-2 ">
                <span class="hidden  md:inline lg:inline xl:inline">
                  Fill Personal Details
                </span>
                <span class="inline md:hidden  xl:hidden lg:hidden">2</span>
              </div>
            </div>
          </>
        )}

        <div class="mt-2.5 ml-4 hidden lg:flex xl:flex bg-orange-400 rounded-sm h-[120px] w-1 max-md:ml-2.5"></div>
        {download? (
            <>
              <div class="flex   gap-4 justify-between items-center text-xl font-semibold text-orange-400">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a7e74ed2a1a1e12cf647fbd737faa53e5991c4f2668baaa0b4b0f14e0977c6?apiKey=033e0929b6f8436697d44eb51eae1ca6&"
                  class="w-8 lg:mt-4 xl:mt-4  ml-2 aspect-square"
                  alt="3"
                />
                <div class="flex lg:mt-4  xl:mt-4 items-center">
                  <span class="hidden  md:inline lg:inline xl:inline">
                    Ticket
                  </span>
                  <span class="inline md:hidden  xl:hidden lg:hidden">3</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div class="flex gap-4 justify-between items-center text-xl font-semibold text-white">
                <div class="justify-center mt-2 md:mt-2 lg:mt-4 xl:mt-4 items-center px-3 h-8 text-xl font-medium leading-6 text-center text-orange-500 bg-black aspect-square rounded-[32px]">
                  3
                </div>

                <div class="flex items-center lg:mt-2 xl:mt-2 ">
                  <span class="hidden  md:inline lg:inline xl:inline">
                    Ticket
                  </span>
                  <span class="inline md:hidden  xl:hidden lg:hidden">3</span>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  );
};

export default Track;
