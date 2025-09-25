import React from "react";

const BookingPage = () => {
  const movie = {
    title: "Action Movie 1",
    year: 2023,
    genre: "Action",
    synopsis:
      "An epic action movie filled with thrilling scenes, heroic moments, and breathtaking stunts.",
    banner: "https://via.placeholder.com/1200x500?text=Action+Movie+Banner",
    price: 250,
    cast: [
      { name: "Actor 1", image: "https://via.placeholder.com/150x200" },
      { name: "Actor 2", image: "https://via.placeholder.com/150x200" },
      { name: "Actor 3", image: "https://via.placeholder.com/150x200" },
    ],
    reviews: [
      { author: "John Doe", text: "Amazing movie! Loved every second." },
      { author: "Jane Smith", text: "Great action and storyline." },
    ],
    similarMovies: Array.from({ length: 8 }, (_, i) => ({
      id: i,
      title: `Similar Movie ${i + 1}`,
      image: `https://via.placeholder.com/200x300?text=Similar+${i + 1}`,
    })),
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Banner Image */}
      <img
        src={movie.banner}
        alt={movie.title}
        className="w-full h-[400px] md:h-[500px] object-cover rounded-b-3xl shadow-lg"
      />

      {/* Movie Info */}
      <div className="movie-info max-w-6xl mx-auto px-6 py-8 bg-gray-900 rounded-xl mt-6 shadow-lg">
        <h1 className="movie-title text-3xl md:text-5xl font-bold tracking-wide text-yellow-400 mb-2">
          {movie.title}
        </h1>
        <div className="movie-details text-gray-300 text-sm md:text-base flex flex-wrap gap-4 mb-4">
          <span>{movie.genre}</span>
          <span>•</span>
          <span>{movie.year}</span>
        </div>
        <p className="movie-synopsis text-gray-200 mb-6">{movie.synopsis}</p>
        <button
          className="book-now-btn w-full md:w-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6"
          onClick={() => alert(`🎬 Booking "${movie.title}" for ₹${movie.price}!`)}
        >
          Book Now - ₹{movie.price}
        </button>
      </div>

      <hr className="divider border-t border-gray-700 my-8" />

      {/* Cast Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Cast</h2>
        <div className="cast-container flex flex-wrap gap-6 justify-start items-start">
          {movie.cast.map((actor, index) => (
            <div key={index} className="cast-card w-32 md:w-36 bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 text-center">
              <img src={actor.image} alt={actor.name} className="w-full h-40 object-cover" />
              <div className="cast-name text-white font-semibold mt-2">{actor.name}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider border-t border-gray-700 my-8" />

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {movie.reviews.map((review, index) => (
          <div key={index} className="review-card bg-gray-800 p-4 rounded-xl shadow-md mb-4">
            <div className="review-author font-semibold text-yellow-400">{review.author}</div>
            <div className="review-text text-gray-300 text-sm mt-1">{review.text}</div>
          </div>
        ))}
      </div>

      <hr className="divider border-t border-gray-700 my-8" />

      {/* You May Also Like */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
        <div className="similar-movies-container flex gap-5 overflow-x-scroll scrollbar-hide px-4 md:px-6 py-4 snap-x snap-mandatory">
          {movie.similarMovies.map((smovie) => (
            <div key={smovie.id} className="similar-movie-card min-w-[200px] bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 snap-start">
              <img src={smovie.image} alt={smovie.title} className="w-full h-72 object-cover" />
              <div className="similar-movie-title text-white font-semibold text-sm md:text-base p-2 truncate">{smovie.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
