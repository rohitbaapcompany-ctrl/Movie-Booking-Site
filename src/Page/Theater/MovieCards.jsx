import { useState } from "react";

const MovieCard = ({ movie, index }) => {
  const [imageError, setImageError] = useState(false);

  // Array of prices (can cycle through)
  const prices = [150, 200, 250, 300, 350];
  const price = prices[index % prices.length]; // pick a price based on index

  const handleImageError = () => {
    setImageError(true);
  };

  const getPlaceholderImage = () =>
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"%3E%3Crect width="300" height="450" fill="%231f2937"/%3E%3Ctext x="150" y="225" text-anchor="middle" fill="%239ca3af" font-size="16" font-family="Arial"%3ENo Image%3C/text%3E%3C/svg%3E';

  const handleButtonClick = () => {
    if (movie.status === "coming_soon") {
      alert(`You'll be notified when "${movie.title}" is available!`);
    } else {
      alert(`Booking "${movie.title}" for ₹${price}`);
    }
  };

  return (
    <div
      className="movie-card rounded-2xl relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Movie Image */}
      <div className="movie-image relative">
        <img
          src={
            imageError
              ? getPlaceholderImage()
              : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }
          alt={movie.title}
          className="w-full h-60 object-cover"
          onError={handleImageError}
        />

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 rating-badge text-white text-xs font-bold px-2 py-1 rounded-full bg-black/50">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}
        </div>

        {/* Coming Soon Badge */}
        {movie.status === "coming_soon" && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Coming Soon
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3 relative z-10">
        {/* Title */}
        <h3 className="text-sm font-semibold text-white truncate mb-1">
          {movie.title}
        </h3>

        {/* Info */}
        <div className="flex flex-wrap gap-1 text-gray-300 text-xs mb-3">
          <span className="truncate">{movie.genre}</span>
          <span>•</span>
          <span>{movie.year}</span>
        </div>

        {/* Button with hover text */}
       <button
  onClick={handleButtonClick}
  className="movie-button w-full h-10 flex items-center justify-center text-white text-sm font-semibold rounded-lg relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-all duration-300"
>
  {movie.status === "coming_soon" ? (
    <>
      <span className="block group-hover:hidden text-center">
        Coming Soon
      </span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        Notify Me
      </span>
    </>
  ) : (
    <>
      <span className="block group-hover:hidden text-center">₹{price}</span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        Book Now
      </span>
    </>
  )}
</button>

      </div>
    </div>
  );
};

export default MovieCard;
