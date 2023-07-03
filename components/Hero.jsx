"use client"
import React, { useState } from 'react';
import Heroimg from "../resources/Heroimg.jpg"
import whatsapp from "../resources/whatsapp.svg"
const Hero = () => {
  return (
    <div className="flex justify-around pt-10  ">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center">
        <img
          className="h-auto max-h-120 lg:w-1/2 lg:h-auto lg:max-h-full "
          src={Heroimg.src}
          alt=""
        />

        <div className="lg:ml-2 ">
        <h1 className="text-4xl font-extrabold text-white tracking-wider mt-4  lg:text-5xl">
          <span className="bg-white  bg-clip-text text-transparent animate-shine animate-pulse text-center" >
            FITNESS IS FUN
          </span>
        </h1>



          <p className="text-lg text-left mt-3  text-red-500 tracking-wide">
          Unlock your true potential at Yos Fitness Studio, where strength meets determination.
          </p>
          <a href="https://wa.me/919840690418" target="_blank" rel="noopener noreferrer">
            <button className="  bg-green-700 text-white   px-4 py-2 mt-3 rounded-lg flex  items-center">
              
               WhatsApp Us
              <img src={whatsapp.src} alt="WhatsApp" className="w-4 h-4 ml-2" />
            </button>
          </a>


        </div>
      </div>
    </div>
  );
};

export default Hero;


