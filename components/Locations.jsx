import React from 'react'
import Locations from '../resources/Location.png'
import Link from 'next/link';
const Location = () => {
  return (
    <div id="" className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center h-screen  ">
      <div className="flex items-center">
      <img className="w-64 h-64 " src={Locations.src} alt="" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center pl-8 text-white md:ml-8">
      <h1 className="text-5xl font-bold mb-4  mt-3 text-center">VISIT <span className=''>US</span> AT:</h1>
      <p className="text-xl text-gray-300  text-center">
          
          54, 55 1st and 2nd Floor, Kutchery Road, 
          <br />
          Mylapore, Chennai, 
          <br/>
          Tamil Nadu, 600004
          <br/>
          <a href="tel:+9840690418"><p >Phone: <span className='underline mt-3'>98406 90418</span></p></a>
          
          <a href="tel:+4424622040"><p >Landline: <span className='underline ml-3 mt-3'>044 2462 2040</span></p></a>
          <br/>
        <a href='https://www.google.com/maps/place/Yos+Fitness+Studio/@13.034714,80.2688309,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267d36203ca79:0x82aa7648ee29e6f3!8m2!3d13.034714!4d80.2710196!16s%2Fg%2F11bxjz8wzx?entry=ttu'><button className='mt-3 text-red-500 border border-gray-300  hover:bg-gray-100 hover:text-gray-800 px-4 py-3 rounded-lg'>Click here</button></a>
        </p>

      </div>

    </div>
  )
}

export default Location