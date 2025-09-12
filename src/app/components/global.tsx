"use client";
import React, { useState } from "react";
import Link from "next/link";

const AirJordanCollection = () => {
  const [favorites, setFavorites] = useState(new Set());

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
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black relative overflow-hidden min-h-screen">
      {/* Éléments décoratifs améliorés */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-red-200 rounded-full opacity-20 blur-xl animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-25 blur-lg animate-pulse delay-2000"></div>

      {/* Particules flottantes */}
      <div className="absolute top-20 left-1/3 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 right-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section Amélioré */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-orange-500 bg-clip-text text-transparent leading-tight">
              Nos Meilleures
            </h2>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-orange-500 via-red-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Ventes
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive des sneakers les plus populaires
          </p>
        </div>

        {/* GRID Améliorée - 3x3 avec cases vides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 max-w-6xl mx-auto">
          {/* Première rangée */}
          {airJordans.slice(0, 3).map((jordan, index) => (
            <Link
              href={`/airjordan/${jordan.id}`}
              key={jordan.id}
              className="group block transform transition-all duration-500 hover:scale-[1.05] hover:rotate-1"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-red-300 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col group-hover:border-opacity-60 backdrop-blur-sm">
                
                {/* IMAGE Container - Plus grande */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-t-3xl h-80 flex-shrink-0">
                  <img
                    src={jordan.image}
                    alt={jordan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay avec effet glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge "Populaire" */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Populaire
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 bg-white flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-3 line-clamp-2">
                      {jordan.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                      {jordan.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Deuxième rangée avec une basket + 2 cases vides */}
          {airJordans.slice(3, 4).map((jordan, index) => (
            <Link
              href={`/airjordan/${jordan.id}`}
              key={jordan.id}
              className="group block transform transition-all duration-500 hover:scale-[1.05] hover:rotate-1"
              style={{
                animationDelay: `${(index + 3) * 200}ms`
              }}
            >
              <div className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-red-300 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col group-hover:border-opacity-60 backdrop-blur-sm">
                
                {/* IMAGE Container - Plus grande */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-t-3xl h-80 flex-shrink-0">
                  <img
                    src={jordan.image}
                    alt={jordan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay avec effet glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge "Populaire" */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Populaire
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 bg-white flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-3 line-clamp-2">
                      {jordan.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                      {jordan.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Cases vides pour compléter la grille 3x3 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg h-full flex flex-col">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-t-3xl h-80 flex-shrink-0">
            </div>
            <div className="p-8 bg-white flex-grow flex flex-col justify-between">
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg h-full flex flex-col">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-t-3xl h-80 flex-shrink-0">
            </div>
            <div className="p-8 bg-white flex-grow flex flex-col justify-between">
            </div>
          </div>
        </div>

        {/* Bouton "Voir Tout" */}
        <div className="text-center">
          <Link
            href="/collection"
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 hover:from-red-600 hover:via-red-700 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="mr-3">Voir Tout</span>
            <svg 
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Effet de parallaxe en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AirJordanCollection;