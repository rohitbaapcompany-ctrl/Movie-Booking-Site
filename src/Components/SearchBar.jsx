import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const wrapperRef = useRef(null); // ref for the search area

  useEffect(() => {
    fetchAllMovies("Avengers");
  }, []);

  // Close search if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowInput(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const fetchAllMovies = async (searchQuery) => {
    const endpoints = [
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en&page=1`,
      `https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&page=1`,
      `https://api.themoviedb.org/3/discover/movie?with_original_language=te&sort_by=popularity.desc&page=1`,
    ];

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDAzZGY5ZWY3M2UyMzNjYjhhZTc4NDFkMTViZjk5NyIsIm5iZiI6MTc1ODU0Mjk1Ni42NTQsInN1YiI6IjY4ZDEzYzZjNDBmYzg4MWI5MzdhNDliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GYEhWlxdN-D__jiljih71YSgO0ms-FWt-kIdPFHhils",
      },
    };

    try {
      const results = await Promise.all(
        endpoints.map((url) =>
          fetch(url, options)
            .then((res) => res.json())
            .then((data) => data.results || [])
            .catch(() => [])
        )
      );

      const merged = results.flat();
      const unique = Array.from(new Map(merged.map((m) => [m.id, m])).values());

      setMovies(unique);
    } catch (error) {
      console.error("fetchAllMovies error:", error);
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      <button
        onClick={() => setShowInput(!showInput)}
        className="p-2 text-white hover:text-gray-300"
      >
        <FaSearch size={20} />
      </button>

      {showInput && (
        <div className="absolute top-[-5px] right-10">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => {
              const q = e.target.value;
              setQuery(q);
              if (q.length >= 2) {
                fetchAllMovies(q);
              }
            }}
            className="w-60 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none"
          />

          {query && (
            <div
              style={{ overflowY: "scroll" }}
              className="absolute mt-2 w-90 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-50"
            >
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <div
                    key={movie.id}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                          : "/images/placeholder.png"
                      }
                      alt={movie.title}
                      className="w-14 h-16 mr-3"
                    />
                    <span>{movie.title}</span>
                  </div>
                ))
              ) : (
                <p className="px-3 py-2 text-gray-500">No results found</p>
              )}
              <button
                className="view bg-red-500 text-white w-full py-2 mt-1 rounded"
                onClick={() =>
                  navigate("/viewall", { state: { movies: filteredMovies } })
                }
              >
                View All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
