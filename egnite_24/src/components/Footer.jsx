import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="min-h-16 px-2 md:px-14 lg:px-16 xl:px-16 py-4 flex justify-center md:justify-normal lg:justify-normal xl:justify-normal bg-[#371A06]">
          
          <div className="  hidden sm:flex sm:ml-8 md:ml-0 lg:ml-0 xl:ml-0 md:flex lg:flex xl:flex sm:w-[40%] md:w-[70%] lg:w-[70%] xl:w-[70%]  flex-col bg-transparent">
            <div className="sm:self-center md:self-start lg:self-start xl:self-start bg-transparent">
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-3xl
                text-center pt-5 font-semibold bg-transparent">E-GNITE 24</h1>
            </div>
            <p className=" hidden md:flex lg:flex xl:flex mt-4 pr-2 bg-transparent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta similique, error sequi veritatis hic vitae obcaecati libero neque voluptas. Odio fugiat provident unde labore consequatur maiores modi aspernatur architecto porro? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, ad. Consectetur a, praesentium perspiciatis soluta accusantium minus aperiam corrupti rem quis ea eos, modi error tempore. Nam incidunt delectus adipisci.
            </p>
            <p className="hidden sm:inline md:hidden lg:hidden xl:hidden bg-transparent mt-4 ml-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi nemo unde quam atque rem. Dolorum architecto cupiditate corrupti non?</p>

          </div>
          <div className=" ml-4 flex w-[60%] md:w-[30%] lg:w-[30%] xl:w-[30%] items-center flex-col gap-2 bg-transparent  ">
            

            <h1 className="bg-transparent text-2xl md:text-2xl lg:text-3xl xl:text-3xl pt-5 text-white font-semibold">Reach Out to Us</h1>
            <p className="bg-transparent mt-3 text-center">+91 12345 67890 - Coordinator</p>
            
            <div className="flex gap-2 mt-4  bg-transparent">
              {/* logos social */}
              <img src=" " alt="1" />
              <img src=" " alt="2" />
              <img src=" " alt="3" />
              <img src=" " alt="4" />
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
