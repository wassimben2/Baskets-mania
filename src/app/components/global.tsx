"use client";
import React, { useState } from "react";
import Link from "next/link";

const AirJordanCollection = () => {
  const [favorites, setFavorites] = useState(new Set());

  const airJordans = [
    {
      id: 1,
      name: "Air Jordan 1 High Lost and Found",
      price: "12,800.00 DZD",
      image: "/8.webp",
    },
    {
      id: 2,
      name: "Air Jordan 1 High 85",
      price: "12,500.00 DZD",
      image: "/9.webp",
    },
    {
      id: 3,
      name: "Air Jordan 1 High Mocha",
      price: "12,800.00 DZD",
      image: "/10.webp",
    },
    {
      id: 4,
      name: "Air Jordan 1 High X DIOR",
      price: "12,800.00 DZD",
      image: "/11.webp",
    },
  ];

  return (
    <section className="py-16 bg-white text-black relative overflow-hidden">
      {/* Petites bulles décoratives */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-gray-100 rounded-full opacity-40"></div>
      <div className="absolute top-20 right-16 w-6 h-6 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-32 left-1/4 w-3 h-3 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-gray-150 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-7 h-7 bg-gray-100 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gray-200 rounded-full opacity-35"></div>
      <div className="absolute bottom-10 left-1/2 w-3 h-3 bg-gray-100 rounded-full opacity-45"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-600 to-orange-500 bg-clip-text text-transparent">
            Collection Air Jordan
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airJordans.map((jordan) => (
            <Link
              href={`/airjordan/${jordan.id}`}
              key={jordan.id}
              className="group block transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white hover:bg-gray-50 transition-all duration-500 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 overflow-hidden cursor-pointer h-full flex flex-col group-hover:border-red-200">
                
                {/* IMAGE - Hauteur fixe */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl h-80 flex-shrink-0">
                  <img
                    src={jordan.image}
                    alt={jordan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>

                {/* TEXT - Flex pour égaliser la hauteur */}
                <div className="p-8 bg-white flex-grow flex flex-col justify-between border-t border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-2 line-clamp-2">
                      {jordan.name}
                    </h3>
                   
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-gray-900">{jordan.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirJordanCollection;