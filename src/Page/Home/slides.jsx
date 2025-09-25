import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "https://pbs.twimg.com/media/FNV1USxXMAA71Mh?format=jpg&name=4096x4096",
    title: "Spider-Man: No Way Home",
    price: "400",
    textbutton: "Book now",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/08/The-Conjuring-Last-Rites-New-Poster-Header-FUTURE-OF-THE-FORCE.jpg?fit=1934%2C1094&ssl=1",
    title: "The Conjuring: Last Rites",
    price: "600",
    textbutton: "Book now",
    comingSoon: false,
    description:
      "Paranormal investigators Ed and Lorraine Warren take on one last terrifying case involving mysterious entities they must confront.",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/07/filters_quality95formatwebp.jpeg?fit=1200%2C675&ssl=1",
    title: "Third Slide",
    price: "1299",
    textbutton: "Book now",
    description: "Some representative placeholder content for the third slide.",
  },
];

const Slides = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Autoplay every 5s with pause
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <div
      className="relative w-full h-150 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Caption */}
            {index === current && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/50 text-white p-6 rounded-lg text-center max-w-xl">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm">{slide.description}</p>

                {/* Price / Book Now Button */}
                {slide.price ? (
                  <button className="mt-4 w-70 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md relative group">
                    <span className="block group-hover:hidden">
                      ₹{slide.price}
                    </span>
                    <span className="hidden group-hover:block">
                      {slide.textbutton || "Book Now"}
                    </span>
                  </button>
                ) : (
                  <button className="mt-4 w-70 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md cursor-not-allowed">
                    {slide.textbutton || "Coming Soon"}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
      >
        ❯
      </button>
    </div>
  );
};

export default Slides;
