import { useState, useEffect } from "react";
import MovieCard from "./MovieCards"; 

// Loading Skeleton Components
const SkeletonCard = ({ index }) => {
  return (
    <div 
      className="skeleton-card rounded-2xl overflow-hidden"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="h-60 bg-gray-800 animate-pulse"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="flex gap-2">
          <div className="h-3 bg-gray-800 rounded w-16 animate-pulse"></div>
          <div className="h-3 bg-gray-800 rounded w-8 animate-pulse"></div>
        </div>
        <div className="h-3 bg-gray-800 rounded w-24 animate-pulse"></div>
        <div className="h-8 bg-gray-800 rounded animate-pulse mt-3"></div>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="bg-black p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-6">
          <div className="h-10 bg-gray-800 rounded-lg w-64 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-800 rounded-lg w-96 animate-pulse"></div>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center items-center py-16">
          <div className="relative">
            <div className="loading-spinner animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
            <div className="mt-3 text-white text-center font-medium">Loading Movies...</div>
          </div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {[...Array(12)].map((_, index) => (
            <SkeletonCard key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Movie Header Component
const MovieHeader = ({ totalMovies }) => {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white mb-1 title-gradient">
        🎬 Now Showing
      </h2>
      <p className="text-gray-400 text-base">
        Discover amazing movies • {totalMovies} films available
      </p>
    </div>
  );
};

// Movie Stats Component
const MovieStats = ({ movies }) => {
  const availableMovies = movies.filter(m => m.status === 'available').length;
  const comingSoonMovies = movies.filter(m => m.status === 'coming_soon').length;
  const averageRating = movies.length > 0 
    ? (movies.reduce((sum, movie) => sum + (movie.vote_average || 0), 0) / movies.length).toFixed(1)
    : '0.0';

  const stats = [
    {
      value: availableMovies,
      label: 'Available Now',
      color: 'text-white',
      icon: '🎬'
    },
    {
      value: comingSoonMovies,
      label: 'Coming Soon',
      color: 'text-orange-400',
      icon: '🔜'
    },
    {
      value: averageRating,
      label: 'Avg Rating',
      color: 'text-green-400',
      icon: '⭐'
    },
    {
      value: 'HD',
      label: 'Quality',
      color: 'text-red-400',
      icon: '📺'
    }
  ];

  return (
    <div className="mt-10 text-center">
      <div className="footer-stats inline-flex items-center gap-4 rounded-full px-6 py-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center">
              <div className={`text-2xl font-bold ${stat.color} flex items-center justify-center gap-1`}>
                <span className="text-lg">{stat.icon}</span>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className="w-px h-8 bg-gray-600 ml-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom CSS styles
const customStyles = `
  .movie-card {
    background: linear-gradient(145deg, #1f2937, #111827);
    border: 1px solid rgba(55, 65, 81, 0.3);
    box-shadow: 
      0 4px 15px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .movie-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s;
    z-index: 1;
  }

  .movie-card:hover::before {
    left: 100%;
  }

  .movie-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.6),
      0 0 25px rgba(239, 68, 68, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
  }

  .movie-image {
    position: relative;
    overflow: hidden;
  }

  .movie-image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(
      to top,
      rgba(31, 41, 55, 0.9) 0%,
      rgba(31, 41, 55, 0.4) 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  .movie-image img {
    transition: all 0.4s ease;
  }

  .movie-card:hover .movie-image img {
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.1);
  }

  .movie-button {
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    position: relative;
    overflow: hidden;
    box-shadow: 
      0 4px 12px rgba(220, 38, 38, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .movie-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.3s;
  }

  .movie-button:hover::before {
    left: 100%;
  }

  .movie-button:hover {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    box-shadow: 
      0 6px 20px rgba(220, 38, 38, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .coming-soon-badge {
    background: linear-gradient(135deg, #ea580c, #c2410c);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 8px rgba(234, 88, 12, 0.3);
    animation: pulse-glow 2s infinite;
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 2px 8px rgba(234, 88, 12, 0.3);
    }
    50% {
      box-shadow: 0 4px 20px rgba(234, 88, 12, 0.6);
    }
  }

  .rating-badge {
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .title-gradient {
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3));
  }

  .footer-stats {
    background: rgba(31, 41, 55, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(75, 85, 99, 0.3);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .loading-spinner {
    position: relative;
  }

  .loading-spinner::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    border-top: 2px solid #ef4444;
    border-radius: 50%;
    animation: spin-glow 1s linear infinite;
  }

  @keyframes spin-glow {
    0% {
      transform: rotate(0deg);
      box-shadow: 0 0 5px rgba(239, 68, 68, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
    }
    100% {
      transform: rotate(360deg);
      box-shadow: 0 0 5px rgba(239, 68, 68, 0.3);
    }
  }

  .skeleton-card {
    background: linear-gradient(145deg, #1f2937, #111827);
    position: relative;
    overflow: hidden;
  }

  .skeleton-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(75, 85, 99, 0.3),
      transparent
    );
    animation: skeleton-loading 1.5s infinite;
  }

  @keyframes skeleton-loading {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

// Default movies data
const defaultMovies = [
  {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    vote_average: 8.8,
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    genre: "Sci-Fi Thriller",
    year: "2010",
    price: 299,
    status: "available"
  },
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-07",
    vote_average: 8.6,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    genre: "Sci-Fi Drama",
    year: "2014",
    price: 349,
    status: "available"
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre: "Action Crime",
    year: "2008",
    price: 399,
    status: "available"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    release_date: "1994-10-14",
    vote_average: 8.9,
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    genre: "Crime Drama",
    year: "1994",
    price: 249,
    status: "available"
  },
  {
    id: 5,
    title: "The Matrix",
    release_date: "1999-03-31",
    vote_average: 8.7,
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genre: "Sci-Fi Action",
    year: "1999",
    price: 299,
    status: "available"
  },
  {
    id: 6,
    title: "Forrest Gump",
    release_date: "1994-07-06",
    vote_average: 8.8,
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    genre: "Drama Comedy",
    year: "1994",
    price: 279,
    status: "available"
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    release_date: "1994-09-23",
    vote_average: 9.3,
    poster_path: "/q6y0Go1aSYYP1nt62GTkX2A0Eo.jpg",
    genre: "Drama",
    year: "1994",
    price: 329,
    status: "available"
  },
  {
    id: 8,
    title: "Goodfellas",
    release_date: "1990-09-19",
    vote_average: 8.7,
    poster_path: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    genre: "Crime Biography",
    year: "1990",
    price: 259,
    status: "available"
  },
  {
    id: 9,
    title: "Parasite",
    release_date: "2019-05-30",
    vote_average: 8.6,
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    genre: "Thriller Drama",
    year: "2019",
    price: 379,
    status: "available"
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    release_date: "2019-04-26",
    vote_average: 8.4,
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genre: "Action Adventure",
    year: "2019",
    price: 449,
    status: "available"
  },
  {
    id: 11,
    title: "Dune: Part Two",
    release_date: "2024-03-01",
    vote_average: 8.5,
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    genre: "Sci-Fi Epic",
    year: "2024",
    price: 499,
    status: "coming_soon"
  },
  {
    id: 12,
    title: "Spider-Man: Beyond",
    release_date: "2024-06-15",
    vote_average: 8.2,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    genre: "Action Adventure",
    year: "2024",
    price: 399,
    status: "coming_soon"
  }
];

// Main Movies Component
const Movies = ({ theaters }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      if (theaters && theaters.length > 0) {
        setMovies(theaters);
      } else {
        setMovies(defaultMovies);
      }
      setLoading(false);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, [theaters]);

  if (loading) {
    return (
      <>
        <style>{customStyles}</style>
        <LoadingSkeleton />
      </>
    );
  }

  return (
    <>
      <style>{customStyles}</style>
      <div className="bg-black p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <MovieHeader totalMovies={movies.length} />

          {/* Movies Grid - Using the imported MovieCard component */}
          <div className="grid  gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" style={{position: 'relative', top: '20px'}}>
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                index={index}
                className="relative  top-100"
              />
            ))}
          </div>

          {/* Footer Stats */}
          <MovieStats movies={movies} />
        </div>
      </div>
    </>
  );
};

export default Movies;