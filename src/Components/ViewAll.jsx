import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewAll = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movies = location.state?.movies || [];

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="text-gray-500 text-lg">No movies to show.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center space-y-4  min-h-screen bg-gradient-to-br from-gray-900 via-black">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>

      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          {/* Poster */}
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : "/images/placeholder.png"
            }
            alt={movie.title}
            className="w-32 h-48 object-cover"
          />

          {/* Movie Info */}
          <div className="p-4 flex flex-col justify-between">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p className="text-gray-600">
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </p>
            <p className="text-yellow-500 font-bold">
              Rating: {movie.vote_average || "N/A"}
            </p>
            <p className="text-gray-700 mt-2 line-clamp-3">
              {movie.overview || "No description available."}
            </p>
          </div>
        </div>
      ))}

      {/* Back Button */}
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate("/")}
      >
        Back to Search
      </button>
    </div>
  );
};

export default ViewAll;
