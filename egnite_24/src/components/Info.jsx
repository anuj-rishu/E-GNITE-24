import React, { useState } from "react";
import axios from 'axios';
import QRCode from 'qrcode';
import Track from "./Track";

const Info = () => {
  const [download, setDownload] = useState(false);
  const [formData, setFormData] = useState({});
  const [qrCode, setQrCode] = useState(null);
  const [ticketStatus, setTicketStatus] = useState(false);

  // Function to handle ticket generation
  const handleTicketDownload = () => {
     // Update state to indicate ticket is generated
    setDownload(true);
  };

  // Function to handle ticket generation
  const handleTicketGeneration = async (event) => {
    event.preventDefault();
    // Update state to indicate ticket is generated
    setTicketStatus(true); 

    // Convert form data to QR code
    const qrCodeData = await QRCode.toDataURL(JSON.stringify(formData));
    setQrCode(qrCodeData);

    // Save form data to Google Sheets using Sheetdb API
    const sheetyApiUrl = 'https://sheetdb.io/api/v1/88jgqxa15n2a2';
    await axios.post(sheetyApiUrl, formData);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
          <header className="flex flex-col  sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {/* Page Tracker */}
        <Track ticketStatus={ticketStatus} download={download} />

        <div className=" sm:flex sm:justify-center sm:items-center md:flex md:justify-center  my-auto w-[100%] h-px  md:w-[100%] lg:w-px lg:h-[540px] xl:w-px xl:h-[580px]  sm:w-[100%] sm:h-px  md:h-px bg-white "></div>

        {ticketStatus ? (
          <>
            <div className="flex flex-col  items-center flex-1 max-w-full">
              <div className="text-5xl mt-4 font-bold text-orange-600">
                <h1>YOUR TICKET</h1>
              </div>
              {/* ticket card */}

              {download ? (
                <>
                  <div className=" mt-14 lg:mt-36 xl:mt-40 flex flex-col justify-center items-center ">
                    <div>
                      <h1 className="text-white  text-xl font-medium">
                        Your ticket has been downloaded!
                      </h1>
                    </div>
                    <div className="mt-12 w-[55%] ">
                      <h1 className="text-xl text-center text-slate-400">
                        Join our whatsapp community and follow our social media
                        for latest updates
                      </h1>
                      <div className=" mt-4 flex justify-center gap-1">
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
                {/* // ticket card */}
                  <div className="h-[60%] mt-14 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center rounded-xl w-full p-7 bg-[#D0580496]">
                    <div className="w-[80%] sm:w-[75%] lg:w-[60%] md:w-[60%] xl:w-[60%] bg-transparent text-white flex flex-col ">
                      <div className="bg-transparent">
                        <h1 className="bg-transparent text-3xl font-semibold text-center sm:text-center md:text-start lg:text-start xl:text-start">
                          EGNITE'24
                        </h1>
                        <div className=" bg-white h-px w-[100%] sm:w-[100%]  md:w-[80%] lg:w-[80%] xl:w-[80%] mt-2"></div>
                      </div>
                      <div className=" w-[90%] mt-10 gap-2 flex flex-wrap flex-col text-2xl font-bold bg-transparent">
                        <div className="bg-transparent">
                          Name :{" "}
                          <span className="bg-transparent text-xl font-medium">
                            Carl Jackson
                          </span>
                        </div>
                        <div className="bg-transparent">
                          SRM Reg No :{" "}
                          <span className="bg-transparent text-xl font-medium">
                            RA2XXXXXXXXXXXX
                          </span>{" "}
                        </div>
                        <div className="bg-transparent">
                          Srm Mail Id :{" "}
                          <span className="bg-transparent text-xl font-medium">
                            sb1355@srmist.edu.in{" "}
                          </span>{" "}
                        </div>
                        {/* <button className=" mt-2 p-2 text-center font-medium bg-white text-black">
                          BAR CODE
                        </button> */}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 lg:mt-0 xl:mt-0 h-px w-[80%]   lg:w-px lg:h-[260px]  xl:w-px xl:h-[260px]  md:w-px md:h-[260px]   text-white bg-white"></div>
                    <div className=" mt-4 md:mt-0 lg:mt-0 xl:mt-0 w-[40%] bg-transparent flex  justify-center items-center">
                      <div className="bg-slate-300 border border-blue-50 h-50 w-50">

                        {/* // QR code */}
                        <img src={qrCode} alt="Qr" className=" bg-slate-200 text-black h-50 w-50" />
                      </div>
                    </div>
                  </div>
                  {/* btn */}
                  <div className="items-end mt-12 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    <button
                      className=" rounded-md bg-orange-600 p-2  w-72 text-center font-semibold text-white text-xl"
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
            <div className="flex flex-col flex-1 text-xl text-white max-md:max-w-full">
              <div className="justify-center self-center px-1 py-1  font-light text-black whitespace-nowrap rounded-full bg-zinc-300 ">
                <img
                  src="https://i.ibb.co/7zv3Y3t/Rectangle-1-1.png"
                  alt=""
                  className="h-32 sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-40 lg:w-40 xl:h-40 xl:w-40 w-32 rounded-full"
                />
              </div>
              <div className="self-center mt-5 text-base text-center">

                {/* user name */}
                Hi, ABCD EFGH
              </div>

                {/* user refi name */}
              <div className="self-center mt-3.5 text-base text-center">
                RA2XXXXXXXXXXX
              </div>

              {/* /main form */}
              <form className="flex flex-col" onSubmit={handleTicketGeneration}>
                <div className="flex gap-5 justify-between pt-2 mt-5 whitespace-nowrap max-md:flex-wrap">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="email">E-Mail</label>
                
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input type="text" id="email" placeholder="@srmist.edu.in" required name="email" className="h-[42px] w-full "  pattern=".+@srmist\.edu\.in"  title="Please enter a valid email address with the domain @srmist.edu.in"   onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 self-start">
                    <label htmlFor="contact">Contact</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input type="number" id="contact" name="contact"  required    pattern="\d{10}"  title="Please enter a 10 digit contact number" className="h-[42px] w-full " onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between pt-2 mt-7 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 self-start">
                    <label htmlFor="department">Department</label>
                    <div className="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input type="text" id="department" required  placeholder=" cse-it" name="department" className="h-[42px] w-full " onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="section">Section</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input type="text" id="section" name="section" required  placeholder=" u1" className="h-[42px] w-full " onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between pt-2 mt-7 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="faName">FA Name</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input type="text" id="faName"   required name="faName" className="h-[42px] w-full " onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="faContact">FA Contact No</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                  <input type="number" id="contact" name="contact"  required    pattern="\d{10}"  title="Please enter a 10 digit contact number" className="h-[42px] w-full " onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                  Any questions for the speaker?
                </div>
                <div className="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px] max-md:max-w-full">
                  <input type="text" id="questions"  name="questions" className="h-[42px] w-full " onChange={handleInputChange} />
                </div>
                <button
                  className="justify-center items-center self-center px-16 py-3.5 mt-14 mb-4 max-w-full text-2xl font-semibold text-center bg-orange-500 rounded-lg w-[441px] max-md:px-5 max-md:mt-10"
                  type="submit"
                >
                  Generate Ticket
                </button>
              </form>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Info;
