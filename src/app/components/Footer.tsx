import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col space-y-3 justify-center items-center">
        <div className="bg-blue-950 text-white mx-10 p-10 rounded-2xl flex md:flex-row flex-col font-medium justify-between items-start w-[65rem] 2xl:w-[85rem]">
          <div className="space-y-2">
            <h3 className="text-5xl font-semibold">Neuzify</h3>
            <p className="font-medium text-xl italic w-96">One platform to create, manage, and discover newsletters effortlessly.</p>
          </div>
          <div className="p-10 text-xl">
            <ul>
                <li>Home</li>
                <li>Features</li>
            </ul>
          </div>
          <div>
          <button className="mt-6 px-6 py-2 w-60 font-semibold bg-blue-950 text-white border-white border-2 rounded-lg shadow hover:bg-blue-900 hover:scale-105 transform transition-transform duration-300">
          Add to Waitlist
        </button> 
          </div>
        </div>
        <div className="">
          <div className="flex flex-col-reverse md:flex-row justify-between py-4 ">
            <p className=" mt-10 md:mt-0">
              Copyright © {year} Neuzify . All Rights Reserved
            </p>
            {/* <div className="flex space-x-2 ">
              <a href="">User Terms & Conditions </a>
              <div className="w-[0.5px] bg-white"></div>
              <a href="">Privacy Policy</a>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
