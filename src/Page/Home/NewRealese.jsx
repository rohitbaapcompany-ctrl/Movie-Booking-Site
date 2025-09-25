import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { useNavigate as navigator } from "react-router-dom";


const NewRelease = () => {
  const navigate = navigator();

  const ChangePage = () => {  
    navigate('/BookingPage')
  }
  const movies = [
    {
      id: 1,
      title: "Lokah Chapter 1",
      image:
        "https://preview.redd.it/lokah-chapter-1-chandra-reviews-and-discussions-zero-v0-enz587c06mlf1.jpeg?width=640&crop=smart&auto=webp&s=ae471692ea5bb453c3f30ef760c95f7b14df06fd",
      rating: "⭐ 4.8",
      genre: "Action | Fantasy | Adventure | Drama",
      year: "2021",
      price: "150",
    },
    {
      id: 2,
      title: "Demon Slayer: Infinity Castle Arc",
      image:
        "https://preview.redd.it/new-poster-for-demon-slayer-kimetsu-no-yaiba-infinity-v0-jnccimdxdo9f1.jpeg?width=1080&crop=smart&auto=webp&s=b6da9904b864b48097db1a0c56934421c61ace83",
      rating: "⭐ 4.5",
      genre: "Action | Fantasy | Drama | Adventure",
      year: "2022",
      price: "180",
    },
    {
      id: 3,
      title: "Jolly LLB 3",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM0LjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00450799-evnrygqxbf-portrait.jpg",
      rating: "⭐ 5.0",
      genre: "Comedy | Drama | Social Commentary",
      year: "2019",
      price: "300",
    },
    {
      id: 4,
      title: "The Conjuring Last Rites",
      image:
        "https://a.ltrbxd.com/resized/film-poster/9/3/6/0/6/5/936065-the-conjuring-last-rites-0-230-0-345-crop.jpg?v=597eedcd06",
      rating: "⭐ 5.0",
      genre: "Supernatural Horror | Horror | Mystery",
      year: "2024",
      price: "250",
    },
    {
      id: 5,
      title: "Mirai",
      image:
        "https://cdn.district.in/movies-assets/images/cinema/Mirai_Poster-1e0ab180-8894-11f0-9d36-8174d6609eb9.jpg",
      rating: "⭐ 5.0",
      genre: "Action | Mythology | Fantasy | Adventure",
      year: "2024",
      price: "500",
    },
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <style jsx>{`
        .movie-card {
          background: linear-gradient(145deg, #1f2937, #111827);
          border: 1px solid rgba(55, 65, 81, 0.3);
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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
          transition: left 0.6s;
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

        .price-text {
          display: block;
          transition: opacity 0.3s ease;
        }

        .book-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }

        .movie-button:hover .price-text {
          opacity: 0;
        }

        .movie-button:hover .book-text {
          opacity: 1;
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

        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="title-gradient text-3xl font-bold mb-8 text-center">
          🎬 New Releases
        </h2>

        <div className="grid relative gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card rounded-2xl fade-in relative bottom-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Movie Image */}
              <div className="movie-image relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"%3E%3Crect width="300" height="450" fill="%231f2937"/%3E%3Ctext x="150" y="225" text-anchor="middle" fill="%239ca3af" font-size="16" font-family="Arial"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 rating-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                  {movie.rating}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 relative z-10">
                <h3 className="text-lg font-semibold text-white truncate mb-2" title={movie.title}>
                  {movie.title}
                </h3>

                <div className="flex flex-wrap gap-1 mt-2 text-gray-300 text-xs mb-4">
                  <span className="truncate">{movie.genre}</span>
                  <span>•</span>
                  <span>{movie.year}</span>
                </div>

                {/* Fixed Button with proper hover effect */}
                <button
                  className="movie-button w-full py-2 text-white font-semibold rounded-lg relative"
                  onClick={ChangePage}
                >
                  <span className="price-text">₹{movie.price}</span>
                  <span className="book-text flex items-center gap-1">
                    <RiMovie2Fill size={20} className="relative "/> Book Now
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;