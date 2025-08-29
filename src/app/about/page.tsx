'use client';

import Navbar from "../components/navbar";
import SneakersInfo from "../components/sneakersinfo";
import { useParams } from "next/navigation";
export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id); 

  const products = {
    1: {
      name: "Air Jordan 1 Mid",
      images: ["/11.webp", "/15.webp", "/16.webp"],
      description: "Sneakers tendance et confortables",
      originalPrice: 22000,
      currentPrice: 18000,
      sizes: [39, 40, 41, 42, 43, 44],
      isPromotion: true,
    },
    2: {
      name: "Nike Dunk Low",
      images: ["/17.webp", "/18.webp"],
      description: "Modèle iconique revisité",
      originalPrice: 24000,
      currentPrice: 20000,
      sizes: [40, 41, 42, 43],
      isPromotion: false,
    },
  };

  const product = products[id];

  if (!product) {
    return <div className="p-10 text-red-600">Produit introuvable 😢</div>;
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <SneakersInfo
        name={product.name}
        images={product.images}
        description={product.description}
        currentPrice={product.currentPrice}
        originalPrice={product.originalPrice}
        sizes={product.sizes}
        isPromotion={product.isPromotion}
      />
    </main>
  );
}
