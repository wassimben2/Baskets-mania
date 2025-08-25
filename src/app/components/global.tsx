'use client';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import React, { useState } from 'react';

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
      price: " 12,500.00 DZD",
      image: "/9.webp",
    },
    {
      id: 3,
      name: "Air Jordan 1 High Mocha",
      price: " 12,800.00 DZD",
      image: "/10.webp",
    },
    {
      id: 4,
      name: "Air Jordan 1 High X DIOR",
      price: "DA 12,800.00 DZD",
      image: "/11.webp",
      isNew: false
    },
    {
      id: 5,
      name: "Air Jordan 1 high OG Starfish",
      price: "12,800.00 DZD",
      image: "/12.webp",
      isNew: false
    },
    {
      id: 6,
      name: "Air Jordan 1 High OG « Black Toe » 2025",
      price: "  12,800.00 DZD",
      image: "/13.webp",
    }
  ];

  

  return (
    <section className="py-16 bg-white text-black relative overflow-hidden">
     
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-100 to-orange-100 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-purple-100 rounded-full translate-x-48 translate-y-48 opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Collection Air Jordan
              </h2>
              <p className="text-gray-600 text-lg">Les modèles iconiques qui ont marqué l'histoire</p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mt-4 rounded-full"></div>
            </div>
            <button className="hidden md:block bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg">
              Voir tout
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airJordans.map((jordan) => (
            <div
              key={jordan.id}
              className="group bg-white hover:bg-gray-50 transition-all duration-500 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
            >
             
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl">
                <img
                  src={jordan.image}
                  alt={jordan.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {jordan.isNew && (
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                      ✨ NOUVEAU
                    </span>
                  )}
                </div>

               
                

               {/*Zid llpanier*/}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
                    <ShoppingCart className="w-5 h-5 inline mr-2" />
                    Ajouter au panier
                  </button>
                </div>
              </div>

             
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-500 text-sm font-bold mb-2 tracking-wider uppercase">{jordan.model}</p>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors leading-tight">
                      {jordan.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 font-medium">{jordan.colorway}</p>

            
                <div className="flex items-center mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current drop-shadow-sm" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-3 font-medium">(4.8) • 124 avis</span>
                </div>

               
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-black">{jordan.price}</span>
                    <span className="text-gray-400 line-through text-lg">{jordan.originalPrice}</span>
                  </div>
                  <button className="p-3 hover:bg-gray-100 transition-all duration-300 rounded-full group/cart">
                    <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-black group-hover/cart:scale-110 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

     {/*LMENU MOBILEEEEEEEEEEEEEEEE*/}
        <div className="md:hidden mt-12 text-center">
          <button className="bg-gradient-to-r from-black to-gray-800 text-white px-10 py-4 font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 w-full rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            Voir toute la collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirJordanCollection;