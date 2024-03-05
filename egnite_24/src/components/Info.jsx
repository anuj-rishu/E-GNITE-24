import React, { useState, useRef } from "react";
import axios from "axios";
import QRCode from "qrcode";
import Track from "./Track";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Info = () => {
  const [download, setDownload] = useState(false);
  const [formData, setFormData] = useState({});
  const [qrCode, setQrCode] = useState(null);
  const [ticketStatus, setTicketStatus] = useState(false);
  const ticketRef = useRef();

  // Function to handle ticket download
  const handleTicketDownload = () => {
    domtoimage.toBlob(ticketRef.current).then(function (blob) {
      saveAs(blob, "Egnite'24-ticket.png");
      setDownload(true);
    });
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
    const sheetyApiUrl = "https://sheetdb.io/api/v1/88jgqxa15n2a2";
    await axios.post(sheetyApiUrl, formData);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <> <div className="min-h-screen">
      <header class="flex flex-col  sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {/* Page Tracker */}
        <Track ticketStatus={ticketStatus} download={download} />

        <div class=" sm:flex sm:justify-center sm:items-center md:flex md:justify-center  my-auto w-[100%] h-px  md:w-[100%] lg:w-px lg:h-[540px] xl:w-px xl:h-[580px]  sm:w-[100%] sm:h-px  md:h-px bg-white "></div>

        {ticketStatus ? (
          <>
            <div class="flex flex-col  items-center flex-1 max-w-full">
              <div class="text-5xl mt-4 mb-8 font-bold text-orange-600">
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
                      <div class=" mt-4 flex justify-center  text-orange-500 text-2xl gap-4">
                        {/* logo */}

                        <a
                          href="https://chat.whatsapp.com/LrLQvmr7vhJ56U96kYYabz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IoLogoWhatsapp />
                        </a>
                        <a
                          href="https://www.instagram.com/ecell_srmist/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <RiInstagramFill />
                        </a>

                        <a
                          href="https://www.linkedin.com/company/e-cell-srmist/mycompany/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>

                        <a
                          href="https://twitter.com/ecellsrmist"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* // ticket card */}

                   {/* // ticket card */}

                   <div></div>
                  <div
                    ref={ticketRef}
                    class="h-[60%] mt-0 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center rounded-xl w-full p-7 bg-[#D0580496]"
                  >
                    <div class="w-[80%] sm:w-[75%] lg:w-[60%] md:w-[60%] xl:w-[60%] bg-transparent text-white flex flex-col ">
                      <div class="bg-transparent">
                        <h1 class="bg-transparent text-3xl font-semibold text-center sm:text-center md:text-start lg:text-start xl:text-start">
                          EGNITE'24
                        </h1>
                        <div class=" bg-white h-px w-[100%] sm:w-[100%]  md:w-[80%] lg:w-[80%] xl:w-[80%] mt-2"></div>
                      </div>
                      <div class=" w-[90%] mt-10 gap-2 flex flex-wrap flex-col text-2xl font-bold bg-transparent">
                        {/* //user name */}
                        <div class="bg-transparent">
                          Name :{" "}
                          <span class="bg-transparent text-xl font-medium">
                            {formData.stuname}
                          </span>
                        </div>

                        {/* //user register number */}
                        <div class="bg-transparent">
                          Reg No :{" "}
                          <span class="bg-transparent text-xl font-medium">
                            {formData.registerNumber}
                          </span>{" "}
                        </div>

                        {/* //user email id*/}
                        <div class="bg-transparent">
                          Srm Mail Id :{" "}
                          <span class="bg-transparent text-xl font-medium">
                            {formData.email}
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 md:mt-0 lg:mt-0 xl:mt-0 h-px w-[80%]   lg:w-px lg:h-[260px]  xl:w-px xl:h-[260px]  md:w-px md:h-[260px]   text-white bg-white"></div>
                    <div class=" mt-4 md:mt-0 lg:mt-0 xl:mt-0 w-[40%] bg-transparent flex  justify-center items-center">
                      <div class="bg-slate-300 border border-blue-50 h-50 w-50">
                        {/* // QR code */}
                        <img
                          src={qrCode}
                          alt="Qr"
                          class=" bg-slate-200 text-black h-50 w-50"
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
                      DOWNLOAD TICKET
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
                  src="/logo.svg"
                  alt=""
                  class="h-32 sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-40 lg:w-40 xl:h-40 xl:w-40 w-32 rounded-full"
                />
              </div>
              <div class="self-center mt-5 text-base text-center">
                {/* user name */}
              </div>

              {/* user refi name */}
              {/* <div class="self-center mt-3.5 text-base text-center">
                RA2XXXXXXXXXXX
              </div> */}

              {/* /main form */}
              <form className="flex flex-col" onSubmit={handleTicketGeneration}>
                <div className="flex gap-5 justify-between pt-2 mt-5 whitespace-nowrap max-md:flex-wrap">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="registerNumber">Name</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="stuname"
                        name="stuname"
                        required
                     
                        title="Please enter only letters"
                        className="h-[42px] w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 self-start">
                    <label htmlFor="registerNumber">Register Number</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="registerNumber"
                        name="registerNumber"
                        required
                        className="h-[42px] w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 justify-between pt-2 mt-5 whitespace-nowrap max-md:flex-wrap">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="email">E-Mail</label>

                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="email"
                        placeholder="@srmist.edu.in"
                        name="email"
                        className="h-[42px] w-full "
                        pattern="[a-z]{2}[0-9a-zA-Z]{4}@srmist\.edu\.in"
                        required
                        title="Please enter a valid email address with the domain aa11@srmist.edu.in"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 self-start">
                    <label htmlFor="contact">Contact</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        pattern="[0-9]{8,10}"
                        required
                        title="Please enter a 10 digit contact number"
                        className="h-[42px] w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between pt-2 mt-7 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 self-start">
                    <label htmlFor="department">Department</label>
                    <div className="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="department"
                        placeholder=" cse-it"
                        name="department"
                        required
                        className="h-[42px] w-full "
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="section">Section</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="section"
                        name="section"
                        placeholder=" u1"
                        required
                        className="h-[42px] w-full "
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between pt-2 mt-7 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="faName">FA Name</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="faName"
                        name="faName"
                        pattern="[A-Za-z]+"
                        title="Please enter only letters"
                        required
                        className="h-[42px] w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="registerNumber">FA Conatct</label>
                    <div className="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
                      <input
                        type="text"
                        id="faContact"
                        name="faContact"
                        pattern="[0-9]{8,10}"
                        required
                        title="Please enter a 10 digit contact number"
                        className="h-[42px] w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                  Any questions for the speaker?
                </div>
                <div className="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px] max-md:max-w-full">
                  <input
                    type="text"
                    id="question"
                    name="question"
                    pattern="[A-Za-z]+"
                    className="h-[42px] w-full"
                    onChange={handleInputChange}
                  />
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




    </div>
      
    </>
  );
};

export default Info;

