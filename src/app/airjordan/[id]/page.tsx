"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import SneakersInfo from '../../components/sneakersinfo';

// Base de données des sneakers
const sneakersData = {
  1: {
    name: "Air Jordan 1 High Lost and Found",
    images: ["/8.webp", "/8.webp", "/8.webp"], 
    description: "La Air Jordan 1 High Lost and Found revisite un classique avec des détails vintage authentiques. Inspirée des archives Jordan, cette paire offre un look rétro avec des finitions modernes.",
    originalPrice: 15000,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [40, 41, 42, 43, 44, ],
    isPromotion: true,
    features: [
      "Cuir véritable premium",
      "Semelle en caoutchouc durable", 
      "Col rembourré pour le confort",
      "Design iconique Air Jordan"
    ],
    colorways: [
      { name: "Chicago", color: "#DC143C" },
      { name: "Black Toe", color: "#000000" }
    ]
  },
  2: {
    name: "Air Jordan 1 High 85",
    images: ["/9.webp", "/9.webp", "/9.webp"],
    description: "La Air Jordan 1 High 85 reproduit fidèlement la silhouette originale de 1985 avec des proportions authentiques et des matériaux premium.",
    originalPrice: 14000,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    isPromotion: true,
    features: [
      "Forme originale de 1985",
      "Cuir premium",
      "Semelle vintage",
      "Logo Wings authentique"
    ],
    colorways: [
      { name: "Neutral Grey", color: "#808080" },
      { name: "Varsity Red", color: "#DC143C" }
    ]
  },
  3: {
    name: "Air Jordan 1 High Mocha", 
    images: ["/10.webp", "/10.webp", "/10.webp"],
    description: "La Air Jordan 1 High Mocha combine des tons terreux avec le design classique Jordan pour un look sophistiqué et polyvalent.",
    originalPrice: 14500,
    currentPrice: 12800,
    currency: "DZD", 
    sizes: [40, 41, 42, 43, 44, 45, 46],
    isPromotion: true,
    features: [
      "Coloris Mocha unique",
      "Matériaux premium", 
      "Confort optimal",
      "Style polyvalent"
    ],
    colorways: [
      { name: "Mocha", color: "#8B4513" },
      { name: "Sail", color: "#F5F5DC" }
    ]
  },
  4: {
    name: "Air Jordan 1 High X DIOR",
    images: ["/Air jordan X dior/11.webp", "/Air jordan X dior/15.webp", "/Air jordan X dior/16.webp","/Air jordan X dior/17.webp","/Air jordan X dior/18.webp","/Air jordan X dior/19.webp"],
    description: "La collaboration exclusive entre Air Jordan et DIOR représente le summum du luxe et du style streetwear avec des finitions exceptionnelles.",
    originalPrice: 16000,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [40, 41, 42, 43, 44, 45],
    isPromotion: true,
    features: [
      "Collaboration DIOR exclusive",
      "Matériaux luxueux", 
      "Finitions premium",
      "Édition limitée"
    ],
    colorways: [
      { name: "Grey/White", color: "#A9A9A9" },
      { name: "Navy", color: "#000080" }
    ]
  }
};

export default function SneakerDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const sneaker = sneakersData[parseInt(id) as keyof typeof sneakersData];

  // Si la sneaker n'existe pas
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
        description={sneaker.description}
        originalPrice={sneaker.originalPrice}
        currentPrice={sneaker.currentPrice}
        currency={sneaker.currency}
        sizes={sneaker.sizes}
        isPromotion={sneaker.isPromotion}
        features={sneaker.features}
        colorways={sneaker.colorways}
      />
    </div>
  );
}