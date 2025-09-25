import React from "react";

const Marquee = () => {
  return (
    <div>
      <marquee
        behavior="scroll"
        className="text-white"
        onMouseOver={(e) => e.target.stop()}
        onMouseOut={(e) => e.target.start()}
      >
        This site gives you the freedom to book movie tickets online at the lowest prices with the best offers. 
        Enjoy a fast, smooth, and hassle-free experience while choosing your favorite movies, showtimes, and seats. 
        Perfect for movie lovers who want comfort and savings together! 

      </marquee>
    </div>
  );
};

export default Marquee;
