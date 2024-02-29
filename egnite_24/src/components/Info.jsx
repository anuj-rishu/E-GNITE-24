import React from 'react'

const Info = () => {
  return (
    <>
    
    <header class="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
  <div class="flex flex-col self-start mt-5 whitespace-nowrap basis-0">
    <div class="flex gap-4 justify-between text-xl font-semibold text-orange-400">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a7e74ed2a1a1e12cf647fbd737faa53e5991c4f2668baaa0b4b0f14e0977c6?apiKey=033e0929b6f8436697d44eb51eae1ca6&" class="w-8 aspect-square" />
      <div class="flex-auto">Register</div>
    </div>
    <div class="mt-4 ml-4 bg-orange-400 rounded-sm h-[120px] w-[31px] max-md:ml-2.5"></div>
    <div class="flex gap-4 justify-between mt-4 text-xl">
      <div class="justify-center items-center px-3 h-8 font-medium text-center text-orange-500 bg-black aspect-square leading-[120%] rounded-[32px]">2</div>
      <div class="grow font-semibold text-white">Fill Personal Details</div>
    </div>
    <div class="mt-2.5 ml-4 bg-orange-400 rounded-sm h-[120px] w-[31px] max-md:ml-2.5"></div>
    <div class="flex gap-3 justify-between mt-4">
      <div class="justify-center items-center px-3 h-8 text-base font-medium leading-6 text-center text-orange-500 bg-black aspect-square rounded-[32px]">3</div>
      <div class="flex-auto text-xl font-semibold text-white">Ticket</div>
    </div>
  </div>
  <div class="my-auto w-px bg-white h-[657px]"></div>
  <div class="flex flex-col flex-1 text-xl text-white max-md:max-w-full">
    <div class="justify-center self-center px-7 py-10 text-7xl font-light text-black whitespace-nowrap rounded-full bg-zinc-300 max-md:pr-5 max-md:text-4xl">AE</div>
    <div class="self-center mt-5 text-base text-center">Hi, ABCD EFGH</div>
    <div class="self-center mt-3.5 text-base text-center">RA2XXXXXXXXXXX</div>
    <form class="flex gap-5 justify-between pt-2 mt-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      <div class="flex flex-col flex-1">
        <label for="email">E-Mail</label>
        <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
          <input type="text" id="email" />
        </div>
      </div>
      <div class="flex flex-col flex-1 self-start">
        <label for="contact">Contact</label>
        <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
          <input type="text" id="contact" />
        </div>
      </div>
    </form>
    <form class="flex gap-5 justify-between pt-2 mt-7 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      <div class="flex flex-col flex-1 self-start">
        <label for="department">Department</label>
        <div class="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
          <input type="text" id="department" />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <label for="section">Section</label>
        <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
          <input type="text" id="section" />
        </div>
      </div>
    </form>
    <form class="flex gap-5 justify-between pt-2 mt-7 max-md:flex-wrap max-md:max-w-full">
      <div class="flex flex-col flex-1">
        <label for="faName">FA Name</label>
        <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
          <input type="text" id="faName" />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <label for="faContact">FA Contact No</label>
        <div class="shrink-0 mt-3 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px]">
          <input type="text" id="faContact" />
        </div>
      </div>
    </form>
    <div class="mt-8 max-md:max-w-full">Any questions for the speaker?</div>
    <div class="shrink-0 mt-1.5 rounded-lg border-orange-400 border-solid border-[0.8px] h-[45px] max-md:max-w-full">
      <input type="text" id="questions" />
    </div>
    <button class="justify-center items-center self-center px-16 py-3.5 mt-14 max-w-full text-2xl font-semibold text-center bg-orange-500 rounded-lg w-[441px] max-md:px-5 max-md:mt-10">Generate Ticket</button>
  </div>
</header>
    
    
    </>
  )
}

export default Info