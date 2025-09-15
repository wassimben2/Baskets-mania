"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import SneakersInfo from '../../components/sneakersinfo';
import { s } from 'framer-motion/dist/types/client';

const sneakersData = {
  1: {
    name: "Air Jordan 1 LOW concord",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_39247f00-107e-434b-978a-5858b0b67727.jpg?v=1745165207&width=990",""],
    originalPrice: 13000,
    currentPrice: 12000,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    soldOutSizes: [39,41,44],
    isPromotion: true
  },
  2: {
    name: "Air Jordan 1 High OG Space Jam",
    images: ["/40.webp", "/41.webp", "/42.jpg"],
    originalPrice: 13800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
      soldOutSizes: [42,44],
    isPromotion: true
  },
  3: {
    name: "Jordan 1 low green",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_e6b90f8f-5978-4cef-b198-991260ee5800.jpg?v=1740520706"],
    originalPrice: 13000,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  4: {
    name: "Air Jordan 1 low Panda",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_36cb0a97-bf6b-48d8-8ec7-713a95b72589.jpg?v=1740520129"],
    originalPrice: 13200,
    currentPrice: 13200,
    currency: "DZD",
    sizes: [40,41,42,43],
    soldOutSizes:[40,41,42,43],
    isPromotion: false
  },
  5: {
    name: "Air Jordan 1 high Stage haze",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_d6fe9af8-498b-4e09-baa3-de012363ae12.jpg?v=1740003435"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    soldOutSizes:[40,43,44],
    isPromotion: false
  },
  6: {
    name: "Air Jordan 1 High OG « Black Toe » 2025",
    images: ["https://basketsmania.com/cdn/shop/files/DF424B57-9BCA-4E2A-A4EB-ED26EE8762ED.jpg?v=1755871768"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [ 40, 41, 42, 43, 44,45,46,47],
    soldOutSizes:[46,47],
    isPromotion: false
  },
  7: {
    name: "Air Jordan 1 Mid White",
    images: ["https://basketsmania.com/cdn/shop/files/DA91B474-C261-4C64-855D-896AD916B529.jpg?v=1753875889"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [40,41,42,43,44],
    soldOutSizes:[44,42],
    isPromotion: true
  },
  8: {
    name: "Jordan 1 low wolf grey",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_4b29dc21-5df4-4432-82cb-0f02ba2381d1.jpg?v=1740520934"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    soldOutSizes:[41,42,39],
    isPromotion: true
  },
  9: {
    name: "Air Jordan 11 COOL GREY",
    images: ["https://basketsmania.com/cdn/shop/files/d563a59c8dc319e13143537a0494231f_1.jpg?v=1739615787"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [40,41,42,43,44,45,46],
    soldOutSizes:[40,41,42,43,44,45],
    isPromotion: true
  },
  10: {
    name: "Jordan 1 low White",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_e81ba897-0d04-46b7-a83a-1b190f84e825.jpg?v=1740004481"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  11: {
    name: "Jordan 1 High Hyper Blue",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_dc7887ef-941a-4d07-86ba-e990fcfd545c.jpg?v=1740004806"],
    originalPrice: 11900,
    currentPrice: 11900,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  12: {
    name: "Air Jordan 3 retro BLACK CAT",
    images: ["https://basketsmania.com/cdn/shop/files/3f2003e9997961b60b348b5dcee8a2cf.jpg?v=1739618375"],
    originalPrice: 11500,
    currentPrice: 11500,
    currency: "DZD",
    sizes: [42],
    soldOutSizes:[42],
    isPromotion: false
  },
  13: {
    name: "Air Jordan 1 Low « Ashen Slate »",
    images: ["https://basketsmania.com/cdn/shop/files/521EED6E-3718-478C-B6EE-60B546F79A82.jpg?v=1750029584"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [40, 41, 42, 43],
    soldOutSizes: [40,41,42],
    isPromotion: true
  },
  14: {
    name: "Jordan 1 High Royal Blue",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_a975c576-ecb2-4b32-8ff4-5ed7d5d22995.jpg?v=1740003678"],
    originalPrice: 12400,
    currentPrice: 12400,
    currency: "DZD",
    sizes: [ 39, 40, 41, 42, 43, 44, 45],
    soldOutSizes: [43,44,45],
    isPromotion: true
  },
  15: {
    name: "Air Jordan 11 LEGEND BLUE",
    images: ["https://basketsmania.com/cdn/shop/files/IMG_20250213_105556_434.jpg?v=1739616345"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  16: {
    name: "Air Jordan 11 72-10",
    images: ["https://basketsmania.com/cdn/shop/files/IMG_20250213_112221_043.jpg?v=1739618149"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [ 40, 43, ],
    soldOutSizes: [43],
    isPromotion: false
  },
  17: {
    name: "Air Jordan 1 High Lost and Found",
    images: ["https://basketsmania.com/cdn/shop/files/IMG_20250212_191731_628.jpg?v=1739384935"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  18: {
    name: "Air Jordan 1 High X DIOR",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_1fefa94e-fa51-41c0-8cd4-38d5cc29573b.png?v=1744658158"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  19: {
    name: "Air Jordan 1 High Mocha",
    images: ["https://basketsmania.com/cdn/shop/files/IMG_20250212_191732_055.jpg?v=1739385293"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  20: {
    name: "Air Jordan 1 Low « Ice Blue »",
    images: ["https://basketsmania.com/cdn/shop/files/F923B816-6A01-4C7D-876C-C0FD8CB7E427.jpg?v=1750029948"],
    originalPrice: 11800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  21: {
    name: "Jordan 11 Retro",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_9d63fc8b-586c-41cb-93cd-7c2c08bbd3ba.png?v=1742619723"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  22: {
    name: "Air Jordan 1 Retro Low OG UNC",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_633f529a-3238-4702-b602-8880174372c9.jpg?v=1741307588"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  23: {
    name: "Jordan 1 High bred toe",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_2354c21c-0872-4a9b-9ca8-5b4730b1c3e9.jpg?v=1741306544"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: true
  },
  24: {
    name: "Air Jordan 1 high OG Starfish",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_02a174b6-8c57-4c51-b65f-302fa8071e63.png?v=1742619354"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  25: {
    name: "حذاء Air Jordan 1 ذو مقدمة عالية باللون الأسود",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_4ca5d7e9-ff12-4433-918c-b73a2b1e815f.jpg?v=1740003367"],
    originalPrice: 12700,
    currentPrice: 12700,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  26: {
    name: "Air Jordan 4 OREO",
    images: ["https://basketsmania.com/cdn/shop/files/4A480CFE-9184-47F3-9AFF-14DB738154E1.jpg?v=1753144156"],
    originalPrice: 11500,
    currentPrice: 11500,
    currency: "DZD",
    sizes: [40,41,42,43],
    soldOutSizes:[40,41,42,43],
    isPromotion: true
  },
  27: {
    name: "Air Jordan 1 High 85",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_03ab6b86-38c0-405c-8897-0c408da69947.png?v=1744658969"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  28: {
    name: "Jordan 11 retro CONCORD",
    images: ["https://basketsmania.com/cdn/shop/files/IMG_20250213_112212_176.jpg?v=1739616785"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  29: {
    name: "Jordan 1 Mid SE Pomegranate (femme)",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_36f1aade-522c-44df-a733-0c118475f34d.png?v=1744658765"],
    originalPrice: 12500,
    currentPrice: 12500,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  30: {
    name: "Air Jordan 1 High À ma manière",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_6e0adeee-59c9-42b4-88eb-43f4d68db9c3.png?v=1744659391"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  31: {
    name: "Jordan 1 High lucky green",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_aab69568-8b55-4a43-aeb9-2e940fc8fd25.jpg?v=1741634968"],
    originalPrice: 12800,
    currentPrice: 12800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  32: {
    name: "Air Jordan 5 Shattered Backboard",
    images: ["https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_c4922142-81f5-4c5a-a66e-9f7f3421171f.jpg?v=1740003065"],
    originalPrice: 11800,
    currentPrice: 11800,
    currency: "DZD",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    isPromotion: false
  },
  33: {
    name: "Air Jordan 11 SPACE JAM",
    images: ["https://basketsmania.com/cdn/shop/files/IMG_20250213_105543_003.jpg?v=1739617284"],
    originalPrice: 12990,
    currentPrice: 12990,
    currency: "DZD",
    sizes: [40,41,42,43,44,45],
    soldOutSizes:[40,41,42,43,44,45],
    isPromotion: false
  },
  34: {
    name: "Air Jordan 11 OG BRED",
    images: ["https://basketsmania.com/cdn/shop/files/69ea72be90994a2b1ab299c1959e1a4b_1.jpg?v=1739615360"],
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