import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="min-h-16 px-2 md:px-14 lg:px-16 xl:px-16 py-4 flex justify-center md:justify-normal lg:justify-normal xl:justify-normal bg-[#371A06]">
          
          <div className="  hidden sm:flex sm:ml-8 md:ml-0 lg:ml-0 xl:ml-0 md:flex lg:flex xl:flex sm:w-[40%] md:w-[70%] lg:w-[70%] xl:w-[70%]  flex-col bg-transparent">
            <div className="sm:self-center md:self-start lg:self-start xl:self-start bg-transparent">
              <h1 className="text-white cinzel-font text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl
                text-center pt-5 font-semibold bg-transparent">E-GNITE 24</h1>
            </div>
            <p className=" hidden md:flex lg:flex xl:flex mt-4 pr-2 bg-transparent text-justify ">
            Get ready to ignite your entrepreneurial spirit with E-GNITE, the 
flagship event of E-Cell SRMIST. This annual celebration of entrepreneurship is the perfect opportunity to connect with like-minded individuals, explore the world of business, and gain the 
confidence you need to succeed. With cutting-edge ideas, innovative thinking, and a focus on creativity, E-GNITE is sure to leave you feeling inspired and motivated.
            </p>
            <p className="hidden sm:inline md:hidden lg:hidden xl:hidden bg-transparent mt-4 ml-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi nemo unde quam atque rem. Dolorum architecto cupiditate corrupti non?</p>

          </div>
          <div className=" ml-4 flex w-[60%] md:w-[30%] lg:w-[30%] xl:w-[30%] items-center flex-col gap-2 bg-transparent  ">
            

            <h1 className="bg-transparent text-2xl md:text-2xl lg:text-3xl xl:text-3xl pt-5 text-white font-semibold">Reach Out to Us</h1>
            <p className="bg-transparent mt-3 text-center">
              <a className="bg-transparent" href="tel:+919879196604 ">+91 98791 96604 </a>- Coordinator
              </p>
            
            <div className="flex gap-2 mt-4 text-2xl  bg-transparent">
              <Link
                href="https://chat.whatsapp.com/LrLQvmr7vhJ56U96kYYabz"
                target="_blank"
                rel="noopener noreferrer"
                // style={{ backgroundColor: 'rgb(55 26 6 / var(--tw-bg-opacity))' }}
                className="bg-transparent"
              >
                <IoLogoWhatsapp className="bg-transparent " />
              </Link>
              <Link
                href="https://www.instagram.com/ecell_srmist/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent"
              >
                <RiInstagramFill className="bg-transparent " />
              </Link>

              <Link
                href="https://www.linkedin.com/company/e-cell-srmist/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
               className="bg-transparent"
              >
                <FaLinkedin className="bg-transparent " />
              </Link>

              <Link
                href="https://twitter.com/ecellsrmist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent"
              >
                <FaTwitter className="bg-transparent" />
              </Link>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
