import React from 'react';

const AgricultureSection = () => {
  return (
    <section className="bg-white p-8 lg:flex lg:items-center lg:justify-between">
      {/* Left Section: Images */}
      <div className="lg:w-1/2 relative">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/about-v2-img2.jpg"
            alt="Farmer in field"
            className="w-full h-auto"
          />
        </div>
      
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-10">
        <h2 className="mb-4 sec-title__title text-forestGreen">
        We’re Leader in Agriculture
        Market
        </h2>
        <p className="text-gray-700 mb-4">
          There are many variations of passages of available but the majority
          have suffered alteration in some form.
        </p>

        {/* Checklist */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-goldenYellow">✔</span>
            <p>Lorem is not random text</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-goldenYellow">✔</span>
            <p>If you are going to use</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-goldenYellow">✔</span>
            <p>Evolved over the years</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-goldenYellow">✔</span>
            <p>Making this the first true</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-goldenYellow">✔</span>
            <p>Generator on the Internet</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-goldenYellow">✔</span>
            <p>Over 50 years experience</p>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <p className="text-gray-700">Agriculture</p>
            <p className="text-gray-700">78%</p>
          </div>
          <div className="bg-gray-200 h-2 rounded-full">
            <div className="h-2 rounded-full bg-forestGreen" style={{ width: '78%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <p className="text-gray-700">Organic</p>
            <p className="text-gray-700">67%</p>
          </div>
          <div className="bg-gray-200 h-2 rounded-full">
            <div className="h-2 rounded-full bg-forestGreen" style={{ width: '67%' }}></div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-gray-700">
          <strong className="text-forestGreen">Mike Hardson</strong>, CEO AGRIOX
        </p>
      </div>
    </section>
  );
};

export default AgricultureSection;
