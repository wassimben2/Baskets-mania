"use client";
import React, { useState } from "react";
import { ShoppingCart, Phone, User, MapPin, Building, Minus, Plus } from "lucide-react";

interface SneakersInfoProps {
  name: string;
  images: string[];
  description: string;
  originalPrice?: number;
  currentPrice: number;
  currency?: string;
  sizes?: number[];
  isPromotion?: boolean;
  features?: string[];
  colorways?: { name: string; color: string }[];
}

export default function SneakersInfo({
  name,
  images,
  description,
  originalPrice,
  currentPrice,
  currency = "DZD",
  sizes = [40, 41, 42, 43, 44, 45],
  isPromotion = false,
  features = [],
  colorways = []
}: SneakersInfoProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "/api/placeholder/600/600");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColorway, setSelectedColorway] = useState(colorways[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  
  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    wilaya: '',
    commune: ''
  });
  const [wantsOffers, setWantsOffers] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-DZ', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  // Fonction pour changer l'image sélectionnée
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section Images à gauche */}
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                BASKETS MANIA
              </div>
              {isPromotion && (
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  PROMOTION
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {name}
              </h1>
              
              <div className="flex items-center gap-4">
                {originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(originalPrice)} {currency}
                  </span>
                )}
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(currentPrice)} {currency}
                </span>
              </div>
              
              <p className="text-gray-600">
                Frais de livraison offerts
              </p>
            </div>

            {/* Section Pointure */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Choisissez votre pointure
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 "
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={selectedImage}
                  alt={name}
                  className="w-full h-full object-cover transition-all duration-300"
                  key={selectedImage}
                />
              </div>
              
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageSelect(image)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                        selectedImage === image
                          ? "border-black shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
           
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-medium text-gray-800">Mon Panier</h3>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <img
                  src={selectedImage}
                  alt={name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{name} - Taille {selectedSize || '40'}</h4>
                  <p className="text-lg font-semibold text-gray-900">{formatPrice(currentPrice)} {currency}</p>
                </div>
              </div>
            </div>

           
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 text-center">
                Vos Informations de Livraison
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nom et Prénom"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5  text-black" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Numéro de téléphone"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5  text-black" />
                  <input
                    type="text"
                    name="wilaya"
                    value={formData.wilaya}
                    onChange={handleInputChange}
                    placeholder="Wilaya"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>

                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5  text-black" />
                  <input
                    type="text"
                    name="commune"
                    value={formData.commune}
                    onChange={handleInputChange}
                    placeholder="Commune"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="offers"
                    checked={wantsOffers}
                    onChange={(e) => setWantsOffers(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 text-black"
                  />
                  <label htmlFor="offers" className="text-sm text-gray-700">
                    Je souhaite recevoir les offres spéciales
                  </label>
                </div>
              </div>
            </div>

          
            <div className="border-t pt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-black">Prix unitaire</span>
                  <span className="font-medium text-black">{formatPrice(currentPrice)} {currency}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium text-green-600">GRATUITE</span>
                </div>
                
                <div className="flex items-center justify-between text-lg font-bold pt-3 border-t text-black">
                  <span>Total</span>
                  <span>{formatPrice(currentPrice * quantity)} {currency}</span>
                </div>
              </div>

            
              <div className="flex items-center justify-center gap-4 my-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 text-black"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-medium w-12 text-center text-black">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 text-black"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

            
              <div className="space-y-3">
  <button className="group w-full bg-orange-500 text-white py-4 rounded-lg font-medium hover:bg-orange-600 flex items-center justify-center gap-2 hover:scale-105 transition duration-300">
    <ShoppingCart className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12" />
    COMMANDER MAINTENANT
  </button>
</div>

           <button className="group w-full bg-green-500 text-white py-4 rounded-lg font-medium hover:bg-green-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
  <Phone className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12" />
  Commander via WhatsApp
</button>

              </div>
            </div>
          </div>
        </div>
      </div>

  );
}