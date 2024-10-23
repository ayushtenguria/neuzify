"use client"
import React, { useState } from "react";
import FormButton from "./FormButton";
import Modal from "./Modal";
import Form from "./Form";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col space-y-3 justify-center items-center">
        <div className="bg-blue-950 text-white mx-5 md:mx-10 p-4 md:p-10 rounded-2xl flex md:flex-row flex-col font-medium justify-between items-start w-auto md:w-[65rem] 2xl:w-[85rem]">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-5xl font-semibold">Neuzify</h3>
            <p className="font-medium text-xl italic md:w-96">
              One platform to create, manage, and discover newsletters
              effortlessly.
            </p>
          </div>
          <div className="py-10 md:p-10 text-xl">
            <ul>
              <li>Home</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <FormButton onClick={openModal} title="Add to Waitlist" />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Form />
            </Modal>
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
