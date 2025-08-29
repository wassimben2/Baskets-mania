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
      image: "/Air Jordan 1 High Lost and Found/8.webp",
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
      image: "/Air Jordan 1 High Mocha/10.webp",
    },
    {
      id: 4,
      name: "Air Jordan 1 High X DIOR",
      price: "12,800.00 DZD",
      image: "/Air jordan X dior/11.webp",
    },
    {
      id: 5,
      name: "Air Jordan 1 high Stage haze",
      price: "12,500.00 DZD",
      image: "/Air Jordan 1 high Stage haze/31.webp",
    },
    {
      id: 6,
      name: "Jordan 1 low wolf grey",
      price: "12,500.00 DZD",
      image: "/Jordan 1 low wolf grey/41.webp",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-orange-50 text-black relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 animate-pulse"></div>

   
      <div className="absolute top-10 left-10 w-4 h-4 bg-red-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-20 right-16 w-8 h-8 bg-orange-200 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-32 left-1/4 w-3 h-3 bg-red-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-gray-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-orange-100 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-red-100 rounded-full opacity-60 animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-10 left-1/2 w-3 h-3 bg-orange-200 rounded-full opacity-80 animate-bounce" style={{animationDelay: '2.5s'}}></div>
      
    
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-black rounded-full opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-7 h-7 bg-red-50 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute top-16 left-1/2 w-4 h-4 bg-orange-300 rounded-full opacity-45 animate-pulse" style={{animationDelay: '0.3s'}}></div>

      
      <div className="absolute top-1/3 right-20 w-16 h-8 bg-gradient-to-r from-red-100 to-transparent rounded-full opacity-20 transform rotate-12 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-16 w-20 h-6 bg-gradient-to-l from-orange-100 to-transparent rounded-full opacity-25 transform -rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
      
     
      <div className="absolute top-0 left-1/4 w-0.5 h-32 bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-0 right-1/3 w-0.5 h-40 bg-gradient-to-t from-transparent via-orange-200 to-transparent opacity-25 animate-pulse" style={{animationDelay: '3s'}}></div>
      
     
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-red-300 opacity-40 animate-spin" style={{animationDuration: '8s', animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-8 w-2 h-2 bg-orange-400 opacity-50 animate-spin" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      
    
      <div className="absolute top-20 left-1/3 w-1 h-1 bg-red-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-orange-500 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.8s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm relative">
            Nos meilleurs Air Jordans
          
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-1 translate-x-[-100%] animate-pulse opacity-30"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full relative">
         
            <div className="absolute top-0 left-0 w-2 h-1 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airJordans.map((jordan) => (
            <Link
              href={`/airjordan/${jordan.id}`}
              key={jordan.id}
              className="group block transform transition-all duration-500 hover:scale-[1.05]"
            >
              <div className="bg-white/80 backdrop-blur-sm hover:bg-white/95 transition-all duration-500 border border-gray-200/50 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col group-hover:border-red-300/60 group-hover:shadow-red-100/50 relative">
                
             
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-700 rounded-3xl"></div>
                
       
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-3xl h-80 flex-shrink-0">
                  <img
                    src={jordan.image}
                    alt={jordan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                
               
                  
           
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
                </div>

             
                <div className="p-8 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm flex-grow flex flex-col justify-between border-t border-gray-100/50 relative">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-2 line-clamp-2">
                      {jordan.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                        {jordan.price}
                      </span>
                    </div>
                    
                 
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg group-hover:shadow-red-200">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                
                  <div className="absolute bottom-0 left-8 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-16 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
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