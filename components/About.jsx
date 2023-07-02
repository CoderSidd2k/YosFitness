import React from 'react';
import Logo from '../resources/Logo.png';

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center h-screen ">
      <div className="flex items-center">
      <img className="w-64 h-64 animate-spin-slow" src={Logo.src} alt="" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center pl-8 text-white md:ml-8">
        <h1 className="text-3xl font-bold mb-4 italic mt-3">What Sets Yos Fitness Apart?</h1>
        <ul className="mb-8 list-disc ">
          <li className="flex items-center">
            <span className="inline-block mr-2 text-red-500 text-3xl">•</span>
            <span>Expert Trainers</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block mr-2 text-red-500 text-3xl">•</span>
            <span>State-of-the-Art Facilities</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block mr-2 text-red-500 text-3xl">•</span>
            <span>Supportive Community</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block mr-2 text-red-500 text-3xl">•</span>
            <span>Diverse Range of Fitness Programs</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default About;