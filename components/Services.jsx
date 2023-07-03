import React from 'react';

const Services = () => {
  return (
    <div id="services" className="bg-transparent py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-80 shadow-lg p-6 border border-white border-opacity-50">
            <div className="text-center">
              <svg className="h-8 w-8 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l2 2" />
              </svg>
              <h3 className="text-xl font-bold mb-2 text-white">Fitness Classes</h3>
            </div>
            <p className="text-white ">Join our variety of fitness classes led by our experienced trainers. From yoga to high-intensity workouts, we have something for everyone.</p>
          </div>
          <div className="bg-black bg-opacity-80 shadow-lg p-6 border border-white border-opacity-50">
            <div className="text-center">
              <svg className="h-8 w-8 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12l-4 4-4-4M12 8v8" />
              </svg>
              <h3 className="text-xl font-bold mb-2 text-white">Personal Training</h3>
            </div>
            <p className="text-white ">Get personalized training sessions with our certified personal trainers who will help you achieve your fitness goals effectively.</p>
          </div>
          <div className="bg-black bg-opacity-80 shadow-lg p-6 border border-white border-opacity-50">
            <div className="text-center">
              <svg className="h-8 w-8 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M3.6 13h8.4a1.6 1.6 0 110 3.2H7.6a3.2 3.2 0 010-6.4h2.4M10.4 6.8H6a1.6 1.6 0 110-3.2h2.4a3.2 3.2 0 010 6.4H6" />
              </svg>
              <h3 className="text-xl font-bold mb-2 text-white">Nutritional Guidence</h3>
            </div>
            <p className="text-white ">Receive personalized nutritional guidance from our expert coaches to optimize your diet and support your fitness journey.</p>
          </div>
          <div className="bg-black bg-opacity-80 shadow-lg p-6 border border-white border-opacity-50">
            <div className="text-center">
              <svg className="h-8 w-8 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v4m0 0v4m0-4h4m-4 0H8" />
              </svg>
              <h3 className="text-xl font-bold mb-2 text-white">Group Workouts</h3>
            </div>
            <p className="text-white ">Experience the energy and motivation of our group workout sessions, where you can train with like-minded individuals and stay motivated together.</p>
          </div>
          <div className="bg-black bg-opacity-80 shadow-lg p-6 border border-white border-opacity-50">
            <div className="text-center">
              <svg className="h-8 w-8 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <h3 className="text-xl font-bold mb-2 text-white">Sports Conditioning</h3>
            </div>
            <p className="text-white ">One can Enhance your athletic performance with our specialized sports conditioning programs, tailored to your sport of choice.</p>
          </div>
          <div className="bg-black bg-opacity-80 shadow-lg p-6 border border-white border-opacity-50">
            <div className="text-center">
              <svg className="h-8 w-8 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v4m0 0v4m0-4h4m-4 0H8" />
              </svg>
              <h3 className="text-xl font-bold mb-2 text-white">Student Discounts</h3>
            </div>
            <p className="text-white ">One can Avail Student Discounts with their school or university Identity cards which is exclusively for our youth with dedication.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
