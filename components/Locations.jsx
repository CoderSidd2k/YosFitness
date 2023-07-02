import React from 'react'
import Locations from '../resources/Location.png'
const Location = () => {
  return (
    <div id="" className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center h-screen ">
      <div className="flex items-center">
      <img className="w-64 h-64 animate-spin-slow" src={Locations.src} alt="" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center pl-8 text-white md:ml-8">
      <h1 className="text-4xl font-bold mb-4 italic mt-3 text-center">Where <span className="text-red-500">are</span> we?</h1>
       <p className="text-xl text-gray-300 italic text-center">
          Visit us at:
          <br />
          123 Main Street
          <br />
          City, State, Zip Code
        </p>
      </div>

    </div>
  )
}

export default Location