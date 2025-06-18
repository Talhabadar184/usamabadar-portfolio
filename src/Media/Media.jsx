import React from "react";
import pic from "../assets/Media/1.jpeg";

function Media() {
  return (
    <div id="media" className="flex flex-col items-center justify-center min-h-screen p-6">
      
      {/* Section Heading */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-blue-700">Featured</h1>
      </div>

      {/* Main Card */}
      <div className="bg-gray-200 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start max-w-2xl w-full text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
        
        {/* Left Image */}
        <img
          src={pic}
          alt="Usama Badar"
          className="rounded-lg w-64 h-64 object-cover bg-gray-200"
        />

        {/* Right Content */}
        <div className="flex flex-col justify-center md:justify-start w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-green-700 mb-2">
            Nearpeer's <span className="bg-green-200 px-2 py-1 rounded">CAF</span> Qualified Star
          </h1>

          <h2 className="text-lg text-gray-700 font-semibold">Usama Badar</h2>

          <p className="mt-4 text-sm text-gray-500">
            Featured in CA Online by Nearpeer.
            <br />
            Apni manzil ki taraf rawan dawan 🥰😇
          </p>

          <a
          href="https://www.facebook.com/watch/?v=634959834358652"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-16 md:w-16 bg-gray-500 mt-6 text-white py-2 px-4 rounded border border-blue-700 hover:bg-blue-700 transition"
          >
            View
          </a>
        </div>
      </div>

    </div>
  );
}

export default Media;
