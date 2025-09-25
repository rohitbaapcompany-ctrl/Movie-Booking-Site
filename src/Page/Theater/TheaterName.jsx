import { useState } from "react";
import { Search, X } from "lucide-react";

const TheaterName = ({ onSelectCity, onClose }) => {
  const cities = [
    { name: "Mumbai", stateName: "Maharashtra", icon: "https://img.icons8.com/color/48/000000/mumbai.png" },
    { name: "Delhi-NCR", stateName: "Delhi", icon: "https://img.icons8.com/color/48/000000/delhi.png" },
    { name: "Bengaluru", stateName: "Karnataka", icon: "https://img.icons8.com/color/48/000000/bengaluru.png" },
    { name: "Hyderabad", stateName: "Telangana", icon: "https://img.icons8.com/color/48/000000/hyderabad.png" },
    { name: "Ahmedabad", stateName: "Gujarat", icon: "https://img.icons8.com/color/48/000000/ahmedabad.png" },
    { name: "Chandigarh", stateName: "Chandigarh", icon: "https://img.icons8.com/color/48/000000/chandigarh.png" },
    { name: "Pune", stateName: "Maharashtra", icon: "https://img.icons8.com/color/48/000000/pune.png" },
    { name: "Chennai", stateName: "Tamil Nadu", icon: "https://img.icons8.com/color/48/000000/chennai.png" },
    { name: "Kolkata", stateName: "West Bengal", icon: "https://img.icons8.com/color/48/000000/kolkata.png" },
    { name: "Kochi", stateName: "Kerala", icon: "https://img.icons8.com/color/48/000000/kochi.png" },
    { name: "Jaipur", stateName: "Rajasthan", icon: "https://img.icons8.com/color/48/000000/jaipur.png" },
  ];

  const popularStates = [
    { img: "https://static.thenounproject.com/png/591250-200.png", name: "Mumbai" },
    { img: "https://www.shutterstock.com/image-vector/india-gate-new-delhi-line-260nw-2638069579.jpg", name: "Delhi-NCR" },
    { img: "https://static.thenounproject.com/png/2165510-200.png", name: "Bengaluru" },
    { img: "https://cdn.iconscout.com/icon/free/png-256/free-jhulta-minar-icon-svg-download-png-119680.png", name: "Ahmedabad" },
    { img: "https://www.clipartmax.com/png/middle/42-429802_chandigarh-icon-open-hand-atlanta.png", name: "Chandigarh" },
    { img: "https://cdn-icons-png.flaticon.com/512/16025/16025176.png", name: "Pune" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCities, setShowAllCities] = useState(false);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md relative">
      {/* Close Button */}
      <button
        className=" ml-150 text-gray-500 hover:text-red-500"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for your city"
          className="w-full pl-10 pr-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
        />
      </div>

      {/* Popular States */}
      <div className="flex flex-wrap gap-4 mb-4">
        {popularStates.map((state, i) => (
          <div
            key={i}
            className="flex flex-col items-center w-32 cursor-pointer bg-red-50 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
            onClick={() => onSelectCity(state.name)}
          >
            <img src={state.img} alt={state.name} className="w-full h-24 object-cover rounded-t-lg bg-white" />
            <span className="mt-2 text-red-700 font-semibold text-center">{state.name}</span>
          </div>
        ))}
      </div>

      {/* View All Cities Button */}
      {!showAllCities && (
        <div className="text-center mb-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setShowAllCities(true)}
          >
            View All Cities
          </button>
        </div>
      )}

      {/* Cities List */}
      {showAllCities && (
        <div className="max-h-96 overflow-y-auto space-y-2">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 border border-red-200 rounded-lg cursor-pointer hover:bg-red-50 transition-colors"
                onClick={() => onSelectCity(city.name)}
              >
                <img src={city.icon} alt={city.name} className="w-10 h-10 rounded-full border border-red-200" />
                <div className="flex flex-col">
                  <span className="text-red-700 font-semibold">{city.name}</span>
                  <span className="text-gray-500 text-sm">{city.stateName}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No city found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TheaterName;
