"use client"
import React, { useState } from 'react';
import Heroimg from "../resources/Heroimg.jpg"

const Hero = () => {
  return (
    <div className="flex justify-around pt-10">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center">
        <img
          className="h-auto max-h-120 lg:w-1/2 lg:h-auto lg:max-h-full "
          src={Heroimg.src}
          alt=""
        />

        <div className="lg:ml-8 animate-slide-right">
        <h1 className="text-4xl font-bold text-white tracking-widest mt-4 italic lg:text-5xl">
          <span className="bg-gradient-to-l from-red-900 to-white  bg-clip-text text-transparent animate-shine animate-pulse" >
            Yos Fitness
          </span>
        </h1>



          <p className="text-lg text-left mt-3 italic text-red-500 tracking-wide">
            "Nothing is Fun Unless you do"
          </p>
          <a href="https://forms.gle/2h9UW2D7gtan8EWo8" target="_blank" rel="noopener noreferrer">
            <button className="bg-red-600 text-white px-4 py-2 mt-3 rounded-none md:hidden">
              Contact us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;


