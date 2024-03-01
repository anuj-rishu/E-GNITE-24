import React, { useState } from "react";
import Track from "./Track";

const Info = () => {
  const [download, setDownload] = useState(false);

  // Function to handle ticket generation
  const handleTicketDownload = () => {
    setDownload(true); // Update state to indicate ticket is generated
  };

  const [ticketStatus, setTicketStatus] = useState(false);

  // Function to handle ticket generation
  const handleTicketGeneration = () => {
    setTicketStatus(true); // Update state to indicate ticket is generated
  };

  return (
    <>
      <header class="flex flex-col  sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {/* Page Tracker */}
        <Track ticketStatus={ticketStatus} download={download} />

        <div class=" sm:flex sm:justify-center sm:items-center md:flex md:justify-center  my-auto w-[100%] h-px  md:w-[100%] lg:w-px lg:h-[540px] xl:w-px xl:h-[580px]  sm:w-[100%] sm:h-px  md:h-px bg-white "></div>

        {ticketStatus ? (
          <>
            <div class="flex flex-col  items-center flex-1 max-w-full">
              <div class="text-5xl mt-4 font-bold text-orange-600">
                <h1>YOUR TICKET</h1>
              </div>
              {/* ticket card */}

              {download ? (
                <>
                  <div class=" mt-14 lg:mt-36 xl:mt-40 flex flex-col justify-center items-center ">
                    <div>
                      <h1 class="text-white  text-xl font-medium">
                        Your ticket has been downloaded!
                      </h1>
                    </div>
                    <div class="mt-12 w-[55%] ">
                      <h1 class="text-xl text-center text-slate-400">
                        Join our whatsapp community and follow our social media
                        for latest updates
                      </h1>
                      <div class=" mt-4 flex justify-center gap-1">
                        {/* logo */}
                        <img src="" alt="1" />
                        <img src="" alt="2" />
                        <img src="" alt="3" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div class="h-[60%] mt-14 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center rounded-xl w-full p-7 bg-[#D0580496]">
                    <div class="w-[80%] sm:w-[75%] lg:w-[60%] md:w-[60%] xl:w-[60%] bg-transparent text-white flex flex-col ">
                      <div class="bg-transparent">
                        <h1 class="bg-transparent text-3xl font-semibold text-center sm:text-center md:text-start lg:text-start xl:text-start">
                          EGNITE'24
                        </h1>
                        <div class=" bg-white h-px w-[100%] sm:w-[100%]  md:w-[80%] lg:w-[80%] xl:w-[80%] mt-2"></div>
                      </div>
                      <div class=" w-[90%] mt-10 gap-2 flex flex-wrap flex-col text-2xl font-bold bg-transparent">
                        <div class="bg-transparent">
                          Name :{" "}
                          <span class="bg-transparent text-xl font-medium">
                            Carl Jackson
                          </span>
                        </div>
                        <div class="bg-transparent">
                          SRM Reg No :{" "}
                          <span class="bg-transparent text-xl font-medium">
                            RA2XXXXXXXXXXXX
                          </span>{" "}
                        </div>
                        <div class="bg-transparent">
                          Srm Mail Id :{" "}
                          <span class="bg-transparent text-xl font-medium">
                            sb1355@srmist.edu.in{" "}
                          </span>{" "}
                        </div>
                        {/* <button class=" mt-2 p-2 text-center font-medium bg-white text-black">
                          BAR CODE
                        </button> */}
                      </div>
                    </div>
                    <div class="mt-4 md:mt-0 lg:mt-0 xl:mt-0 h-px w-[80%]   lg:w-px lg:h-[260px]  xl:w-px xl:h-[260px]  md:w-px md:h-[260px]   text-white bg-white"></div>
                    <div class=" mt-4 md:mt-0 lg:mt-0 xl:mt-0 w-[40%] bg-transparent flex  justify-center items-center">
                      <div class="bg-slate-300 border border-blue-50 h-50 w-50">
                        <img
                          src="xzk"
                          alt="Qr"
                          class=" bg-slate-200 text-black h-40 w-40"
                        />
                      </div>
                    </div>
                  </div>
                  {/* btn */}
                  <div class="items-end mt-12 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    <button
                      class=" rounded-md bg-orange-600 p-2  w-72 text-center font-semibold text-white text-xl"
                      onClick={handleTicketDownload}
                    >
                      DOWNLOAD
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div class="flex flex-col flex-1 text-xl text-white max-md:max-w-full">
              <div class="justify-center self-center px-1 py-1  font-light text-black whitespace-nowrap rounded-full bg-zinc-300 ">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  class="h-32 sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-40 lg:w-40 xl:h-40 xl:w-40 w-32 rounded-full"
                />
              </div>
              <div class="self-center mt-5 text-base text-center">
                Hi, ABCD EFGH
              </div>
              <div class="self-center mt-3.5 text-base text-center">
                RA2XXXXXXXXXXX
              </div>
              <form class=" flex  gap-5 justify-between pt-2 mt-5 whitespace-nowrap max-md:flex-wrap">
                <div class="flex flex-col flex-1">
                  <label for="email">E-Mail</label>
                  <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid  border-[0.8px] h-[45px]">
                    <input type="text" id="email" class="h-[42px] w-full " />
                  </div>
                </div>
                <div class="flex flex-col flex-1 self-start">
                  <label for="contact">Contact</label>
                  <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                    <input type="text" id="contact" class="h-[42px] w-full " />
                  </div>
                </div>
              </form>
              <form class="flex gap-5 justify-between pt-2 mt-7 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div class="flex flex-col flex-1 self-start">
                  <label for="department">Department</label>
                  <div class="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                    <input
                      type="text"
                      id="department"
                      class="h-[42px] w-full "
                    />
                  </div>
                </div>
                <div class="flex flex-col flex-1">
                  <label for="section">Section</label>
                  <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                    <input type="text" id="section" class="h-[42px] w-full " />
                  </div>
                </div>
              </form>
              <form class="flex gap-5 justify-between pt-2 mt-7 max-md:flex-wrap max-md:max-w-full">
                <div class="flex flex-col flex-1">
                  <label for="faName">FA Name</label>
                  <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                    <input type="text" id="faName" class="h-[42px] w-full " />
                  </div>
                </div>
                <div class="flex flex-col flex-1">
                  <label for="faContact">FA Contact No</label>
                  <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                    <input
                      type="text"
                      id="faContact"
                      class="h-[42px] w-full "
                    />
                  </div>
                </div>
              </form>
              <div class="mt-8 max-md:max-w-full">
                Any questions for the speaker?
              </div>
              <div class="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px] max-md:max-w-full">
                <input type="text" id="questions" class="h-[42px] w-full " />
              </div>
              <button
                className="justify-center items-center self-center px-16 py-3.5 mt-14 mb-4 max-w-full text-2xl font-semibold text-center bg-orange-500 rounded-lg w-[441px] max-md:px-5 max-md:mt-10"
                onClick={handleTicketGeneration}
              >
                Generate Ticket
              </button>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Info;
