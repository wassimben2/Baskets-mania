"use client";
import React, { useState } from "react";
import Link from "next/link";

const AirJordanCollection = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);

  const airJordans = [
    {
      id: 1,
      name: "Air Jordan 1 High OG Space Jam",
      price: "11,800.00 DZD",
      image: "/40.webp",
    },
    {
      id: 2,
      name: "Air Jordan 1 High 85",
      price: "12,500.00 DZD",
      image: "/Air Jordan 1 High 85/9.webp",
    },
    {
      id: 3,
      name: "Air Jordan 1 High Mocha",
      price: "12,800.00 DZD",
      image: "/Air jordan 1 high Mocha/10.webp",
    },
    {
      id: 4,
      name: "Air Jordan 1 High X DIOR",
      price: "12,800.00 DZD",
      image: "/Air jordan X Dior/11.webp",
    },
    {
      id: 5,
      name: "Air Jordan 1 Retro High",
      price: "13,200.00 DZD",
      image: "/placeholder-jordan.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === airJordans.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? airJordans.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="text-red-500 font-semibold text-lg tracking-wider uppercase mb-4 block">Collection Premium</span>
            <h2 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-red-500 to-orange-500 bg-clip-text text-transparent leading-tight">
              TOP
            </h2>
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-white bg-clip-text text-transparent leading-tight -mt-4">
              AIR JORDAN
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8 shadow-lg shadow-red-500/50"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive des légendaires Air Jordan, 
            <br className="hidden md:block" />
            des icônes qui transcendent le basketball pour devenir art urbain
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden px-8">
            <div 
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {airJordans.map((jordan, index) => (
                <Link
                  href={`/airjordan/${jordan.id}`}
                  key={jordan.id}
                  className="flex-none w-full md:w-1/3 group block"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-4 hover:rotate-1 transition-all duration-700 overflow-hidden cursor-pointer h-[600px] group-hover:border-red-500/50">
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      ⚡ HOT
                    </div>
                    
                    <div className="absolute top-6 left-6 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity delay-300"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity delay-500"></div>

                    {/* Image Container */}
                    <div className="relative overflow-hidden h-96 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-t-3xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
                      <img
                        src={jordan.image}
                        alt={jordan.name}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 filter group-hover:brightness-110"
                      />
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/0 via-transparent to-orange-500/0 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-700"></div>
                      
                      {/* Price Tag Floating */}
                      <div className="absolute bottom-4 left-6 bg-black/80 backdrop-blur-lg text-white px-4 py-2 rounded-full border border-white/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                          {jordan.price}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 bg-gradient-to-b from-transparent to-black/20 h-52 flex flex-col justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-500 leading-tight mb-4">
                          {jordan.name}
                        </h3>
                        
                        {/* Interactive Elements */}
                        <div className="flex justify-center items-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                          <span className="text-white/80 text-sm font-medium">Voir Détails</span>
                          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/50 group-hover:via-orange-500/50 group-hover:to-red-500/50 transition-all duration-700 pointer-events-none"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {Array.from({ length: Math.max(1, airJordans.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 w-8 shadow-lg shadow-red-500/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/collection"
            className="inline-flex items-center px-16 py-6 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white font-black text-xl rounded-full shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="mr-4 relative z-10">DÉCOUVRIR TOUTE LA COLLECTION</span>
            <svg 
              className="w-8 h-8 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AirJordanCollection;