"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import SneakersInfo from '../../components/sneakersinfo';


const sneakersData = {
  1: {
    name: "Air Jordan 1 LOW concord",
    images: ["/Air Jordan 1 LOW concord/2.webp","/Air Jordan 1 LOW concord/3.webp","/Air Jordan 1 LOW concord/4.webp"],
    originalPrice: 13000,
    currentPrice: 12000,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    soldOutSizes: [39,41,44],
    isPromotion: true
  },
  2: {
    name: "Air Jordan 1 High OG Space Jam",
    images: ["/Air Jordan 1 High OG Space Jam/2.webp","/Air Jordan 1 High OG Space Jam/3.webp","/Air Jordan 1 High OG Space Jam/4.jpg"],
    originalPrice: 13800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
      soldOutSizes: [42,44],
    isPromotion: true
  },
  3: {
    name: "Jordan 1 low green",
    images: ["/Jordan 1 low green/2.webp"],
    originalPrice: 13000,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  4: {
    name: "Air Jordan 1 low Panda",
    images: ["/Air Jordan 1 low Panda/2.webp","/Air Jordan 1 low Panda/3.webp"],
    originalPrice: 13200,
    currentPrice: 13200,
    currency: "DZD",
    sizes: [40,41,42,43],
    soldOutSizes:[40,41,42,43],
    isPromotion: false
  },
  5: {
    name: "Air Jordan 1 high Stage haze",
    images: ["/Air Jordan 1 high Stage haze/2.webp","/Air Jordan 1 high Stage haze/3.webp","/Air Jordan 1 high Stage haze/4.webp"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    soldOutSizes:[40,43,44],
    isPromotion: false
  },
  6: {
    name: "Air Jordan 1 High OG « Black Toe » 2025",
    images: ["/Air Jordan 1 High OG « Black Toe » 2025/2.jpg","/Air Jordan 1 High OG « Black Toe » 2025/3.jpg","/Air Jordan 1 High OG « Black Toe » 2025/4.jpg"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [ 40, 41, 42, 43, 44,45,46,47],
    soldOutSizes:[46,47],
    isPromotion: false
  },
  7: {
    name: "Air Jordan 1 Mid White",
    images: ["/Air Jordan 1 Mid White/2.webp","/Air Jordan 1 Mid White/3.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [40,41,42,43,44],
    soldOutSizes:[44,42],
    isPromotion: true
  },
  8: {
    name: "Jordan 1 low wolf grey",
    images: ["/Jordan 1 low wolf grey/2.webp","/Jordan 1 low wolf grey/3.webp","/Jordan 1 low wolf grey/4.webp"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    soldOutSizes:[41,42,39],
    isPromotion: true
  },
  9: {
    name: "Air Jordan 11 COOL GREY",
    images: ["/Air Jordan 11 COOL GREY/4.webp","/Air Jordan 11 COOL GREY/5.jpg"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [40,41,42,43,44,45,46],
    soldOutSizes:[40,41,42,43,44,45],
    isPromotion: true
  },
  10: {
    name: "Jordan 1 low White",
    images: ["/Jordan 1 low White/2.webp","/Jordan 1 low White/3.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  11: {
    name: "Jordan 1 High Hyper Blue",
    images: ["/Jordan 1 High Hyper Blue/2.webp","/Jordan 1 High Hyper Blue/3.jpg","/Jordan 1 High Hyper Blue/4.webp"],
    originalPrice: 11900,
    currentPrice: 11900,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  12: {
    name: "Air Jordan 3 retro BLACK CAT",
    images: ["/Air Jordan 3 retro BLACK CAT/2.webp","/Air Jordan 3 retro BLACK CAT/3.webp"],
    originalPrice: 11500,
    currentPrice: 11500,
    currency: "DZD",
    sizes: [42],
    soldOutSizes:[42],
    isPromotion: false
  },
  13: {
    name: "Air Jordan 1 Low « Ashen Slate »",
    images: ["/Air Jordan 1 Low « Ashen Slate »/2.webp","/Air Jordan 1 Low « Ashen Slate »/3.webp"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [40, 41, 42, 43],
    soldOutSizes: [40,41,42],
    isPromotion: true
  },
  14: {
    name: "Jordan 1 High Royal Blue",
    images: ["/Jordan 1 High Royal Blue/2.webp","/Jordan 1 High Royal Blue/3.webp","/Jordan 1 High Royal Blue/4.webp"],
    originalPrice: 12400,
    currentPrice: 12400,
    currency: "DZD",
    sizes: [ 39, 40, 41, 42, 43, 44, 45],
    soldOutSizes: [43,44,45],
    isPromotion: true
  },
  15: {
    name: "Air Jordan 11 LEGEND BLUE",
    images: ["/Air Jordan 11 LEGEND BLUE/2.webp","/Air Jordan 11 LEGEND BLUE/3.webp","/Air Jordan 11 LEGEND BLUE/4.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  16: {
    name: "Air Jordan 11 72-10",
    images: ["/Air Jordan 11 72-10/2.jpg","/Air Jordan 11 72-10/3.jpg","/Air Jordan 11 72-10/4.jpg"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [ 40, 43, ],
    soldOutSizes: [43],
    isPromotion: false
  },
  17: {
    name: "Air Jordan 1 High Lost and Found",
    images: ["/Air Jordan 1 High Lost and Found/2.webp","/Air Jordan 1 High Lost and Found/3.jpg","/Air Jordan 1 High Lost and Found/4.jpg"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  18: {
    name: "Air Jordan 1 High X DIOR",
    images: ["/Air Jordan 1 High X DIOR/2.jpg","/Air Jordan 1 High X DIOR/3.webp","/Air Jordan 1 High X DIOR/4.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  19: {
    name: "Air Jordan 1 High Mocha",
    images: ["/Air Jordan 1 High Mocha/2.webp","/Air Jordan 1 High Mocha/3.jpg","/Air Jordan 1 High Mocha/4.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  20: {
    name: "Air Jordan 1 Low « Ice Blue »",
    images: ["/Air Jordan 1 Low « Ice Blue »/2.webp","/Air Jordan 1 Low « Ice Blue »/3.webp","/Air Jordan 1 Low « Ice Blue »/4.webp"],
    originalPrice: 11800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  21: {
    name: "Jordan 11 Retro",
    images: ["/Jordan 11 Retro/2.webp","/Jordan 11 Retro/3.webp","/Jordan 11 Retro/4.webp"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  22: {
    name: "Air Jordan 1 Retro Low OG UNC",
    images: ["/Air Jordan 1 Retro Low OG UNC/2.webp","/Air Jordan 1 Retro Low OG UNC/3.jpg"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  23: {
    name: "Jordan 1 High bred toe",
    images: ["/Jordan 1 High bred toe/2.webp","/Jordan 1 High bred toe/3.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  24: {
    name: "Air Jordan 1 high OG Starfish",
    images: ["/Air Jordan 1 high OG Starfish/2.webp","/Air Jordan 1 high OG Starfish/3.webp","/Air Jordan 1 high OG Starfish/4.webp","/Air Jordan 1 high OG Starfish/5.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  25: {
    name: "Jordan 1 High OG Patent bred",
    images: ["/Jordan 1 High OG Patent bred/2.jpg","/Jordan 1 High OG Patent bred/3.webp"],
    originalPrice: 12700,
    currentPrice: 12700,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  26: {
    name: "Air Jordan 4 OREO",
    images: ["/Air Jordan 4 OREO/2.webp","/Air Jordan 4 OREO/3.webp","/Air Jordan 4 OREO/4.webp"],
    originalPrice: 11500,
    currentPrice: 11500,
    currency: "DZD",
    sizes: [40,41,42,43],
    soldOutSizes:[40,41,42,43],
    isPromotion: true
  },
  27: {
    name: "Air Jordan 1 High 85",
    images: ["/Air Jordan 1 High 85/2.webp","/Air Jordan 1 High 85/3.webp","/Air Jordan 1 High 85/4.webp","/Air Jordan 1 High 85/5.webp" ],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  28: {
    name: "Jordan 11 retro CONCORD",
    images: ["/Jordan 11 retro CONCORD/2.webp","/Jordan 11 retro CONCORD/3.webp","/Jordan 11 retro CONCORD/4.jpg","/Jordan 11 retro CONCORD/5.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  29: {
    name: "Jordan 1 Mid SE Pomegranate (femme)",
    images: ["/Jordan 1 Mid SE Pomegranate (femme)/2.webp","/Jordan 1 Mid SE Pomegranate (femme)/3.webp","/Jordan 1 Mid SE Pomegranate (femme)/4.webp"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  30: {
    name: "Air Jordan 1 High À ma manière",
    images: ["/Air Jordan 1 High À ma manière/2.jpg","/Air Jordan 1 High À ma manière/3.webp","/Air Jordan 1 High À ma manière/4.webp"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  31: {
    name: "Jordan 1 High lucky green",
    images: ["/Jordan 1 High lucky green/2.webp","/Jordan 1 High lucky green/3.webp","/Jordan 1 High lucky green/4.jpg"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  32: {
    name: "Air Jordan 5 Shattered Backboard",
    images: ["/Air Jordan 5 Shattered Backboard/2.webp"],
    originalPrice: 11800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  33: {
    name: "Air Jordan 11 SPACE JAM",
    images: ["/Air Jordan 11 SPACE JAM/2.jpg","/Air Jordan 11 SPACE JAM/3.jpg","/Air Jordan 11 SPACE JAM/4.jpg"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [40,41,42,43,44,45],
    soldOutSizes:[40,41,42,43,44,45],
    isPromotion: false
  },
  34: {
    name: "Air Jordan 11 OG BRED",
    images: ["/Air Jordan 11 OG BRED/2.webp","/Air Jordan 11 OG BRED/3.webp","/Air Jordan 11 OG BRED/4.webp"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
   35: {
    name: "Air Jordan 4 PALE CITRON",
    images: ["/Air Jordan 11 OG BRED/2.webp","/Air Jordan 11 OG BRED/3.webp","/Air Jordan 11 OG BRED/4.webp"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  }

};

export default function SneakerDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const sneaker = sneakersData[parseInt(id) as keyof typeof sneakersData];

  if (!sneaker) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-amber-400">
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
    <div className='min-h-screen bg-white pt-20'>
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