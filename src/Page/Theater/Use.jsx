import { useState } from "react";
import TheaterName from "./TheaterName";
import Movies from "./Movies";
import { FaMicrophone } from "react-icons/fa";
import theatersArray from "./Theater.json"; // Use the correct import

const Use = () => {
  const [showDropdown, setShowDropdown] = useState(false);
const [selectedLocation, setSelectedLocation] = useState(null);

  

  // Use the imported JSON
  const selectedCityData = theatersArray.find(
    (place) => place.placeName === selectedLocation
  );

  return (
    <div className=" mx-auto px-4 mt-20 relative">
      {/* Search & Location */}
      <div className="flex items-center border rounded-full p-2 gap-2 bg-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 w-full bg-white rounded-sm pl-2 outline-none border border-gray-300"
        />


        <FaMicrophone />

        <div
          className="flex items-center cursor-pointer ml-2 text-white"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{selectedLocation || "Location"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-1 left-0 w-full bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          <TheaterName
            onSelectCity={(cityName) => {
              setSelectedLocation(cityName);
              setShowDropdown(false);
            }}
            onClose={() => setShowDropdown(false)}
          />
        </div>
      )}

      {/* Movies */}
      <div className="mt-10">
        {selectedCityData ? (
          selectedCityData.theaters.length > 0 ? (
            <Movies theaters={selectedCityData.theaters} className="absolute top-0 left-0" />
          ) : (
            <p className="text-white text-center">No movies found in this city.</p>
          )
        ) : (
          <p className="text-white text-center">Select a city to see movies.</p>
        )}
      </div>
    </div>
  );
};

export default Use;
