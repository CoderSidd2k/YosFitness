import React from 'react';
import Logo from "../resources/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-black  text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center items-center mb-4">
          <img className="w-16 h-16 mr-2" src={Logo.src} alt="YosFitness Logo" />
          <h2 className="text-2xl font-bold">YOS FITNESS STUDIO</h2>
        </div>
        <div className="flex justify-center items-center mb-4">
          <a className="mr-1" href="https://www.facebook.com/yosfitness/">Facebook</a>
          <span className="text-white opacity-50">|</span>
          <a className="mx-4" href="https://www.instagram.com/yosfitnessstudio/?hl=en">Instagram</a>
          <span className="text-white opacity-50">|</span>
          <a className="mx-4" href="https://wa.me/919840690418">WhatsApp </a>
          <span className="text-white opacity-50">|</span>
          <a className="ml-1" href="/">Website</a>
        </div>
        <div className="flex justify-center items-center">
          
          <p className="text-sm">54, 55 Kutchery Road, Mylapore, Chennai</p>
          
        </div>
        <p className="text-sm mt-4">&copy; 2023 Yos Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
