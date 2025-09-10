"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import SneakersInfo from '../../components/sneakersinfo';
import { s } from 'framer-motion/client';


const sneakersData = {
  1: {
    name: "Air Jordan 1 High OG Space Jam",
    images: ["/Air Jordan 1 High Lost and Found/8.webp", "/Air Jordan 1 High Lost and Found/20.jpg", "/Air Jordan 1 High Lost and Found/21.jpg"], 
    originalPrice: 13800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36,37,38,39,40,41,42,43,44],
    isPromotion: true,
    
  
  },
  2: {
    name: "Air Jordan 1 High 85",
    images: ["/Air Jordan 1 High 85/9.webp", "/Air Jordan 1 High 85/25.webp", "/Air Jordan 1 High 85/26.webp","/Air Jordan 1 High 85/27.webp"],
    originalPrice: 14000,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36,37,38,39],
    isPromotion: true,
   
  },
  3: {
    name: "Air Jordan 1 High Mocha", 
    images: ["/Air Jordan 1 High Mocha/10.webp", "/Air Jordan 1 High Mocha/28.jpg", "/Air Jordan 1 High Mocha/29.webp"],
    originalPrice: 14500,
    currentPrice: 12800,
    currency: "DZD", 
    sizes: [36,37,38,39,40,41,43],
    isPromotion: true,
    soldOutSizes: [41, 43]

  },
  4: {
    name: "Air Jordan 1 High X DIOR",
    images: ["/Air jordan X dior/11.webp", "/Air jordan X dior/15.webp", "/Air jordan X dior/16.webp","/Air jordan X dior/17.webp","/Air jordan X dior/18.webp","/Air jordan X dior/19.webp"],
    originalPrice: 16000,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [40, 41, 42, 43, 44, 45],
    isPromotion: true,
    
 
  },
  5:{
    name: "Air Jordan 1 high Stage haze",
    images: ["/Air Jordan 1 high Stage haze/30.webp", "/Air Jordan 1 high Stage haze/31.webp", "/Air Jordan 1 high Stage haze/32.webp"],
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36,37,38,39,40,41,42,43,44,45],
    isPromotion: true,
    soldOutSizes:[40,45]
    
  },
  6:{
    name: "Jordan 1 low wolf grey",
    images: ["/Jordan 1 low wolf grey/40.webp", "/Jordan 1 low wolf grey/41.webp", "/Jordan 1 low wolf grey/42.webp"],
    originalPrice: 13500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [37,38,39,40,41,42,43],
    isPromotion: true,
    soldOutSizes:[41]
}
}

export default function SneakerDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const sneaker = sneakersData[parseInt(id) as keyof typeof sneakersData];

  if (!sneaker) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Sneaker introuvable</h1>
            <p className="text-gray-600 mb-8">La sneaker que vous cherchez n'existe pas.</p>
            <a href="/" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <SneakersInfo
        name={sneaker.name}
        images={sneaker.images}
       
        originalPrice={sneaker.originalPrice}
        currentPrice={sneaker.currentPrice}
        currency={sneaker.currency}
        sizes={sneaker.sizes}
        isPromotion={sneaker.isPromotion}
        soldOutSizes={sneaker.soldOutSizes} 
      
      />
    </div>
  );
}