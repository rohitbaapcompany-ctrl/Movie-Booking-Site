import React, { useState, useEffect } from "react";
import Conjuring from "../../assets/Image/Conjuring.png";

const Hero = () => {
  const slides = [
    {
      Brand: "Thamma",
      Title: "Thamma",
      Description:
        "This universe needed a love story. Unfortunately, it's a bloody one.",
      Image:
        "https://www.cine-tales.com/wp-content/uploads/2025/08/Thama-Teaser-Review-Ayushmann-Rashmika.jpg",
      comingSoon: true
    },
    {
      Brand: "Mirai",
      Title: "Mirai",
      Description:
        "A warrior is tasked with the protection of nine sacred scriptures that can turn any mortal into a deity.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNzRhNDllYzgtMjg2Yi00MjU4LTk4YTQtMzk5MzZmYmZlOTgzXkEyXkFqcGc@._V1_.jpg",
      price: "600",
    },
    {
      Brand: Conjuring,
      Title: "conjuring Last Rites",
      Description:
        "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      Image: "https://www.theconjuringmovie.com/images/share.jpg",
      price: "500",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto change every 15 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const item = slides[current];

  return (
    <div
      className="relative w-full h-[80vh] sm:h-[90vh] md:h-[700px] bg-center bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${item.Image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-10">
        {/* Brand / Logo */}
        {typeof item.Brand === "string" ? (
          <p className="text-red-500 font-bold uppercase tracking-widest text-sm sm:text-base md:text-lg">
            {item.Brand}
          </p>
        ) : (
          <img
            src={item.Brand}
            alt="Brand Logo"
            className="w-24 sm:w-32 h-auto mx-auto mb-4"
          />
        )}

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mt-4 leading-tight">
          {item.Title}
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-sm sm:text-base md:text-xl mt-4 max-w-md sm:max-w-xl md:max-w-2xl">
          {item.Description}
        </p>

        {/* CTA Button */}
{item.comingSoon ? (
  // Movie is coming soon → just show text
  <button className="mt-4 w-70 py-2 bg-red-400 text-white font-semibold rounded-lg shadow-md cursor-not-allowed">
    Coming Soon
  </button>
) : item.price ? (
  // Movie has price → hover shows textbutton
  <button className="mt-4 w-70 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md relative group">
    <span className="block group-hover:hidden">₹{item.price}</span>
    <span className="hidden group-hover:block">{item.textbutton || "Book Now"}</span>
  </button>
) : null}



      </div>
    </div>
  );
};

export default Hero;
