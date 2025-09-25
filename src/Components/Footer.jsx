import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGooglePlay, FaAppStore  } from "react-icons/fa";
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Image/Logo.png"; // Adjust the path

const navLinks = [
  { text: "Home", url: "/" },
  { text: "Movies", url: "/movies" },
  { text: "Theaters", url: "/theaters" },
  { text: "Releases", url: "/releases" },
  { text: "About Us", url: "/about" },
  { text: "Contact", url: "/contact" },
];

const socialMedia = [
  { icon: faFacebookF, url: "https://facebook.com" },
  { icon: faTwitter, url: "https://twitter.com" },
  { icon: faInstagram, url: "https://instagram.com" },
  { icon: faYoutube, url: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 make-down">
        {/* Logo & Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4 pl-30 justify-center">
            <img src={Logo} alt="QuickShow Logo" className="h-20 w-20 mr-3" />
          </div>
          <p className="text-gray-400">
            Stream your favorite movies and trailers instantly. Discover new releases and enjoy cinematic experiences anywhere.
          </p>

          {/* App Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <FaGooglePlay />
              <span className="text-sm font-semibold">Google Play</span>
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <FaAppStore />
              <span className="text-sm font-semibold">App Store</span>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} className="hover:text-red-500 transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and trailers.</p>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-white bg-gray-800 placeholder-gray-400"
            />
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-lg text-white font-semibold">
              Subscribe
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 transition-colors text-white"
              >
            <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm ">
        &copy; 2025 Movie<span className="teck">Tick </span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
