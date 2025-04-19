import React from "react";
import { assets } from "../assets/assets"; // Your image asset object
import { Link } from "react-router-dom"; // Or use next/link for Next.js

// Reusable ImageGrid Component
const ImageGrid = ({ images }) => (
  <div className="grid grid-cols-2 gap-4">
    {images.map((image, index) => (
      <div
        key={index}
        className={`w-36 h-44 sm:w-44 sm:h-52 rounded-xl overflow-hidden border border-gray-300 shadow-sm transform transition-transform duration-300 ease-in-out ${
          index % 2 === 0
            ? "rotate-2 translate-x-2"
            : "-rotate-3 -translate-x-1"
        } hover:-rotate-6 hover:scale-105`}
      >
        <img
          src={image}
          alt={`Grid ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

const Hero = () => {
  const images = [
    assets.compassImage,
    assets.heroImage,
    assets.tractorImage,
    assets.architectImage,
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-6 sm:px-10 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover the <span className="text-yellow-500">Best Deals</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Shop the latest equipment for exploration and adventure — now up to
            <span className="text-yellow-500 font-semibold"> 50% Off!</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/cart">
              <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition">
                Go to Cart
              </button>
            </Link>
            <Link to="/collection">
              <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-medium rounded-md hover:bg-yellow-50 transition">
                Browse Products
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Grid Section */}
        <div className="sm:flex justify-center relative">
          <div className="absolute -top-10 -left-10 opacity-20 w-[500px] h-[500px] rounded-full bg-yellow-100 blur-3xl"></div>
          <ImageGrid images={images} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
